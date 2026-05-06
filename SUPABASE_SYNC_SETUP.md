# Supabase Edge Function Automated Sync Setup

This guide explains how to set up automatic syncing of server data from otservlist.org every 60 minutes using **only Supabase**.

## Architecture

```
Cron Service (cron-job.org) → Every 60 min
        ↓
POST to Supabase Edge Function
        ↓
Supabase Edge Function (sync-servers)
        ↓
Scrape otservlist.org HTML
        ↓
Parse & normalize server data
        ↓
Batch upsert to Supabase PostgreSQL
        ↓
Log results to sync_logs table
```

## Why This Approach

✅ **Everything in Supabase** - Database, function, logs all in one place  
✅ **No external infrastructure** - Edge function is Supabase native  
✅ **Free cron service** - cron-job.org provides free scheduling  
✅ **Reliable scraping** - Proper headers bypass otservlist.org bot detection  
✅ **Observable** - Full sync history in sync_logs table  
✅ **Efficient** - Batch processing with rate limiting  
✅ **Secure** - Optional token authentication  

## Setup Steps

### Step 1: Create sync_logs Table

Run this SQL in your Supabase dashboard (SQL Editor):

```sql
-- Create sync_logs table to track scheduled sync history
create table if not exists public.sync_logs (
  id uuid not null default gen_random_uuid (),
  timestamp timestamp with time zone not null,
  success boolean not null,
  fetched integer null,
  inserted integer null,
  updated integer null,
  failed integer null,
  error text null,
  execution_time_ms integer null,
  created_at timestamp with time zone not null default now(),
  constraint sync_logs_pkey primary key (id)
) tablespace pg_default;

-- Index for quick lookups of recent syncs
create index if not exists sync_logs_timestamp_idx on public.sync_logs (timestamp desc);

-- Enable RLS
alter table public.sync_logs enable row level security;

-- Policy: Service role can write
create policy "Service role can manage sync logs" on public.sync_logs
  as permissive
  for all
  using (true)
  with check (true);
```

### Step 2: Deploy the Edge Function

The edge function code is already created at `supabase/functions/sync-servers/index.ts`.

Deploy it:

```bash
# Install Supabase CLI (if not already installed)
npm install -g supabase

# Link to your Supabase project
supabase link --project-ref YOUR_PROJECT_REF

# Deploy the function
supabase functions deploy sync-servers
```

Verify deployment:

```bash
# List deployed functions
supabase functions list

# Test locally
supabase functions serve

# In another terminal
curl -X POST http://localhost:54321/functions/v1/sync-servers
```

### Step 3: Set Environment Variables (Optional Security)

To protect your endpoint with a token:

**In Supabase Dashboard:**
1. Go to Project Settings → Edge Functions → Environment Variables
2. Add: `SYNC_TOKEN=your-secure-random-string`

Example:
```
SYNC_TOKEN=pk_sync_abc123def456ghi789jkl0
```

### Step 4: Test the Edge Function

**Option A: Via Supabase Dashboard**
1. Go to Functions → sync-servers
2. Click "Invoke"
3. Check the response

**Option B: Via cURL**
```bash
# Without token
curl -X POST https://YOUR_PROJECT_REF.supabase.co/functions/v1/sync-servers

# With token (if SYNC_TOKEN is set)
curl -X POST https://YOUR_PROJECT_REF.supabase.co/functions/v1/sync-servers \
  -H "x-sync-token: your-secure-random-string"
```

**Option C: Via CLI**
```bash
supabase functions invoke sync-servers --project-ref YOUR_PROJECT_REF
```

Expected response:
```json
{
  "success": true,
  "timestamp": "2024-01-15T15:30:00Z",
  "fetched": 248,
  "inserted": 12,
  "updated": 236,
  "failed": 0,
  "execution_time_ms": 4823
}
```

Check if servers were synced:
```sql
SELECT COUNT(*) FROM servers;
SELECT MAX(last_check) FROM servers;
```

### Step 5: Set Up Cron Scheduling (Free)

Use **cron-job.org** to trigger the sync every 60 minutes.

1. Go to https://cron-job.org/en/
2. Sign up (free account)
3. Click "Create Cronjob"
4. Fill in these fields:

   **Title**: `Tibia Servers Sync`

   **URL**: `https://YOUR_PROJECT_REF.supabase.co/functions/v1/sync-servers`

   **Request method**: `POST`

   **Request body** (if using SYNC_TOKEN):
   ```json
   {}
   ```

   **HTTP headers**:
   ```
   x-sync-token: your-secure-random-string
   Content-Type: application/json
   ```

   **Schedule**: `0 * * * *` (every hour at minute 0)
   - Or: `0 */1 * * *` (every 1 hour)
   - Or: `0,30 * * * *` (every 30 minutes)
   - Or: `0 */6 * * *` (every 6 hours)

5. Click "Create"
6. Click "Test execution" to verify it works
7. Check Supabase sync_logs table for the result

Alternative cron services:
- https://easycron.com (simpler UI)
- https://tool.lu/crontab (minimal)

### Step 6: Monitor Sync Progress

**Check sync logs:**
```sql
-- Last 10 syncs
SELECT * FROM sync_logs ORDER BY timestamp DESC LIMIT 10;

-- See results
SELECT 
  timestamp,
  success,
  fetched,
  inserted,
  updated,
  failed,
  execution_time_ms
FROM sync_logs 
ORDER BY timestamp DESC 
LIMIT 10;

-- Success rate
SELECT 
  success, 
  COUNT(*) as count,
  AVG(execution_time_ms) as avg_time_ms
FROM sync_logs
GROUP BY success;

-- Recent servers updated
SELECT name, ip, players_online, last_check 
FROM servers 
ORDER BY last_check DESC 
LIMIT 10;
```

**Check function logs:**

```bash
# Stream logs from deployed function
supabase functions fetch-logs sync-servers --project-ref YOUR_PROJECT_REF

# Or in Supabase Dashboard:
# Functions → sync-servers → Logs tab
```

### Step 7: Add Sync Status to UI (Optional)

Use the SyncStatus component in your pages:

```jsx
import SyncStatus from '@/app/components/SyncStatus';

export default function Page() {
  return (
    <div>
      <h1>Open Tibia Servers</h1>
      <SyncStatus /> {/* Shows: ✓ Last sync: 2 minutes ago (45 new, 200 updated) */}
      {/* Rest of your page */}
    </div>
  );
}
```

## How It Works

### Scraping Process

The edge function:

1. **Fetches** otservlist.org HTML with proper User-Agent headers to avoid bot detection
2. **Parses** HTML table rows looking for `data-ip` attributes
3. **Extracts** server data from each row:
   - Name, IP, Port
   - World type (PVP, Non-PVP, etc.)
   - Player counts (online, peak)
   - Version
   - Rates (exp, skill, loot)
   - Location
4. **Validates** each server (valid IP format, name length, etc.)
5. **Normalizes** fields to match your database schema

### Deduplication & Updates

**By IP address:**
- If server with same IP exists → **UPDATE** (refreshes player counts, status, rates)
- If new IP → **INSERT** (new server discovered)

**Conflict handling:**
- Validation errors are logged but don't stop the sync
- Failed servers are tracked in `sync_logs` for debugging
- No data loss (updates preserve existing user-submitted fields like website_url, owner_email, description)

### Performance

- **Scraping**: ~5-10 seconds to fetch and parse otservlist.org
- **Database**: ~2-5 seconds to upsert 200-300 servers
- **Total**: ~7-15 seconds per sync
- **Timeout**: Edge functions have ~10 minute limit, so we're safe
- **Rate limiting**: 500ms between batches of 50 servers to prevent DB overload

## Customization

### Change Sync Interval

Edit your cron-job.org schedule:

| Interval | Cron Expression | Use Case |
|----------|-----------------|----------|
| Every 15 minutes | `0,15,30,45 * * * *` | Real-time player counts |
| Every 30 minutes | `0,30 * * * *` | Hourly updates |
| Every 60 minutes | `0 * * * *` | Current (balanced) |
| Every 2 hours | `0 */2 * * *` | Lower overhead |
| Every 6 hours | `0 */6 * * *` | Minimal updates |

### Adjust Batch Size

Edit `supabase/functions/sync-servers/index.ts`:

```typescript
const BATCH_SIZE = 50; // Change this
// Higher = faster but more DB load
// Lower = slower but less DB load
```

Then redeploy:
```bash
supabase functions deploy sync-servers
```

### Add Authentication Token

If you set `SYNC_TOKEN` environment variable, include it in your cron job HTTP headers:

```
x-sync-token: pk_sync_abc123def456ghi789jkl0
```

This prevents unauthorized parties from triggering syncs.

## Troubleshooting

### Issue: Function runs but returns 0 servers

**Cause**: otservlist.org HTML structure changed

**Solution**:
1. Check function logs
2. Manually visit https://otservlist.org and inspect the HTML
3. Update `extract_servers_from_html()` and `parse_server_row()` functions
4. Redeploy with `supabase functions deploy sync-servers`

### Issue: "SUPABASE_URL is undefined"

**Cause**: Environment variables aren't set

**Solution**: Set `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` in Supabase → Project Settings → Edge Functions → Environment Variables

### Issue: High failure rate (50%+ failed)

**Cause**: Database permissions or connectivity issues

**Solutions**:
1. Check RLS policies on `servers` table (should allow service role writes)
2. Check if database is hitting connection limits
3. Check function logs for specific errors
4. Reduce `BATCH_SIZE` to lower concurrent writes

### Issue: Cron job never runs

**Cause**: cron-job.org account or URL misconfiguration

**Solutions**:
1. Check cron-job.org dashboard for execution history
2. Verify URL is correct (copy from Supabase Functions page)
3. Test URL manually with curl
4. Check cron expression syntax

### Issue: Data not updating between syncs

**Cause**: Servers marked offline after one missed check

**Solution**: otservlist.org might only show online servers. This is normal—check total server count in `sync_logs` to verify scraping is working.

## Security Best Practices

1. **Always use SYNC_TOKEN** in production
   ```bash
   SYNC_TOKEN=pk_sync_$(openssl rand -hex 16)
   ```

2. **Include token in cron job headers**
   ```
   x-sync-token: pk_sync_abc123...
   ```

3. **Rotate token periodically** (every 90 days)
   - Update in Supabase environment variables
   - Update in cron-job.org settings

4. **Monitor access logs**
   ```sql
   SELECT * FROM sync_logs WHERE success = false;
   ```

5. **Use RLS policies** on sync_logs to prevent users from reading sync details
   ```sql
   create policy "Users cannot read sync logs" on public.sync_logs
     for select using (false);
   ```

## Next Steps

1. ✅ Create sync_logs table (run SQL)
2. ✅ Deploy edge function (`supabase functions deploy sync-servers`)
3. ✅ Test function manually
4. ✅ Create cron job on cron-job.org
5. ✅ Test cron trigger
6. ✅ Monitor sync_logs table
7. ✅ Add SyncStatus component to UI (optional)
8. ✅ Set up SYNC_TOKEN for security

The sync will now run automatically every 60 minutes. All data stays within Supabase—no external databases or services.

## Dashboard View

To see all your syncs at a glance:

```jsx
// In a new page, e.g., /admin/sync-status
'use client';

import { createClient } from '@/lib/supabase';
import { useEffect, useState } from 'react';

export default function SyncStatus() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    async function fetchLogs() {
      const supabase = createClient();
      const { data } = await supabase
        .from('sync_logs')
        .select('*')
        .order('timestamp', { ascending: false })
        .limit(20);
      setLogs(data || []);
    }
    fetchLogs();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Sync History</h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Time</th>
            <th className="p-2">Status</th>
            <th className="p-2">Fetched</th>
            <th className="p-2">Inserted</th>
            <th className="p-2">Updated</th>
            <th className="p-2">Failed</th>
            <th className="p-2">Time (ms)</th>
          </tr>
        </thead>
        <tbody>
          {logs.map(log => (
            <tr key={log.id} className="border-t">
              <td className="p-2">{new Date(log.timestamp).toLocaleString()}</td>
              <td className="p-2">{log.success ? '✓' : '✗'}</td>
              <td className="p-2">{log.fetched}</td>
              <td className="p-2">{log.inserted}</td>
              <td className="p-2">{log.updated}</td>
              <td className="p-2">{log.failed}</td>
              <td className="p-2">{log.execution_time_ms}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

## Cost

- **Supabase Edge Function**: Free tier = 125,000 requests/month
  - At 1 request/hour = 730 requests/month ✅ Free
- **Supabase Database**: Included in project
- **Cron service**: cron-job.org free tier = unlimited requests ✅ Free

**Total cost: $0**
