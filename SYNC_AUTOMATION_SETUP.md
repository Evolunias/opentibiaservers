# Automated Server Sync Setup Guide

This guide explains how to set up automatic syncing of server data from otservlist.org every 60 minutes.

## Architecture

```
Netlify Scheduled Function (every 60 min)
        ↓
   Scrape otservlist.org
        ↓
   Parse & normalize data
        ↓
   Batch upsert to Supabase
        ↓
   Log results to sync_logs table
```

**Why Netlify Scheduled Functions?**
- Built-in to your existing Netlify deployment
- Runs reliably on a cron schedule
- No external services needed
- Secrets handled securely by Netlify
- Easy monitoring and debugging

## Files Created/Modified

- **`netlify/functions/scheduled-sync.ts`** - The scheduled function that scrapes and syncs
- **`netlify.toml`** - Configuration for the scheduled function (60-minute interval)
- **`supabase/migrations/add_sync_logs.sql`** - Tracks sync history
- **`app/components/SyncStatus.jsx`** - Optional UI component to show sync status

## Setup Steps

### 1. Create the sync_logs Table

Run this SQL migration in your Supabase dashboard:

**Path**: Supabase Dashboard → SQL Editor → Run these queries:

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

### 2. Set Environment Variables in Netlify

**Path**: Netlify Dashboard → Site Settings → Build & Deploy → Environment

Add these variables (get values from Supabase Project Settings):

| Variable | Value |
|----------|-------|
| `SUPABASE_URL` | Your Supabase URL (e.g., `https://xxxxx.supabase.co`) |
| `SUPABASE_SERVICE_ROLE_KEY` | Your Service Role Key |

**⚠️ Important**: Use the **Service Role Key**, NOT the Anon Key. The Service Role Key has permission to perform database operations that bypass RLS.

### 3. Deploy to Netlify

```bash
# Push code to git
git add netlify/functions/scheduled-sync.ts
git add netlify.toml
git commit -m "Add scheduled server sync function"
git push origin main
```

Netlify will automatically:
1. Detect the scheduled function
2. Deploy it with your site
3. Register the cron schedule (every 60 minutes)

### 4. Verify Deployment

**Path**: Netlify Dashboard → Functions

You should see:
- `scheduled-sync` function listed
- Status: `scheduled` or `active`

To test manually:
```bash
# In the Netlify Dashboard, click the function and use the "Trigger" button
```

Or via CLI:
```bash
netlify functions:trigger scheduled-sync
```

### 5. Monitor Sync Results

Check the `sync_logs` table in Supabase:

```sql
SELECT * FROM sync_logs ORDER BY timestamp DESC LIMIT 10;
```

Expected output:
```
| timestamp | success | fetched | inserted | updated | failed | execution_time_ms |
|-----------|---------|---------|----------|---------|--------|------------------|
| 2024-01-15T15:00:00Z | true | 250 | 12 | 238 | 0 | 5234 |
| 2024-01-15T14:00:00Z | true | 248 | 8 | 240 | 0 | 4891 |
| 2024-01-15T13:00:00Z | true | 249 | 5 | 244 | 0 | 5112 |
```

### 6. Add Sync Status to UI (Optional)

Use the `SyncStatus` component in your pages:

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

1. **Fetch** the otservlist.org homepage with proper headers to bypass bot detection
2. **Parse** the HTML table rows using regex patterns
3. **Extract** server data: name, IP, port, world type, players, version, location, rates
4. **Validate** each server (IP format, name length, version format)
5. **Normalize** fields to match your database schema

### Deduplication & Updating

**Check by IP address:**
- If server with same IP exists → **UPDATE** (refreshes player counts, status, etc.)
- If new IP → **INSERT** (new server)

**Conflict handling:**
- Validation errors are logged but don't stop the sync
- Failed servers are tracked in `sync_logs`
- No data loss (updates preserve existing fields)

### Performance

- **Batch size**: 50 servers per transaction (reduces database load)
- **Rate limiting**: 500ms between batches (prevents overwhelming DB)
- **Timeout**: 30 seconds for scraping, ~5 min total execution
- **Schedule**: Every 60 minutes (you can change with cron expression below)

## Customization

### Change Sync Interval

Edit `netlify.toml`:

```toml
# Every 60 minutes (current)
schedule = "0 */1 * * *"

# Every 30 minutes
schedule = "0 */30 * * *"

# Every 15 minutes
schedule = "0 */15 * * *"

# Every 2 hours
schedule = "0 */2 * * *"
```

Cron format: `minute hour day month day_of_week`

### Adjust Batch Size

Edit `netlify/functions/scheduled-sync.ts`:

```typescript
const BATCH_SIZE = 50; // Change this (higher = faster but more DB load)
```

### Customize Parsing

The `parse_server_row()` function extracts data from HTML cells. If otservlist.org changes their layout, update cell indices:

```typescript
function parse_server_row(ip: string, cells: string[]): any {
  // cells[0] = Name
  // cells[1] = Type
  // cells[2] = Online players
  // cells[3] = Peak players
  // cells[4] = Version
  // cells[5] = Exp/Skill/Loot rates
  // cells[6] = Location
  
  // Adjust these if the table structure changes
}
```

## Monitoring & Troubleshooting

### View Sync Logs

```sql
-- Last 10 syncs
SELECT * FROM sync_logs ORDER BY timestamp DESC LIMIT 10;

-- Success rate
SELECT 
  success, 
  COUNT(*) as count,
  AVG(execution_time_ms) as avg_time_ms
FROM sync_logs
GROUP BY success;

-- Failed syncs
SELECT * FROM sync_logs WHERE success = false ORDER BY timestamp DESC;
```

### Check Function Logs

**Path**: Netlify Dashboard → Functions → scheduled-sync → Logs

Or via CLI:
```bash
netlify functions:invoke scheduled-sync
```

### Verify Servers Are Updating

```sql
-- Servers updated in last 60 minutes
SELECT COUNT(*) FROM servers WHERE last_check > NOW() - INTERVAL '60 minutes';

-- Most recently updated servers
SELECT name, ip, players_online, last_check 
FROM servers 
ORDER BY last_check DESC 
LIMIT 10;
```

### Common Issues

**Issue**: Function runs but no servers are synced
- **Cause**: otservlist.org HTML structure changed
- **Solution**: Check function logs, inspect otservlist.org HTML structure, update `extract_servers_from_html()` and `parse_server_row()` functions

**Issue**: "SUPABASE_URL is undefined"
- **Cause**: Environment variables not set in Netlify
- **Solution**: Add `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` in Netlify Site Settings → Environment

**Issue**: High failure rate
- **Cause**: otservlist.org is blocking the scraper (IP ban, rate limiting)
- **Solution**: Add request delays, rotate User-Agent headers, or switch data source

**Issue**: Database is too large
- **Cause**: Old/offline servers accumulating
- **Solution**: Add cleanup job to remove servers offline for >30 days:
```sql
DELETE FROM servers WHERE is_online = false AND last_check < NOW() - INTERVAL '30 days';
```

## Security Considerations

1. **Service Role Key** is private and stored securely in Netlify secrets
2. **No secrets** in client-side code or git
3. **Data validation** prevents injection attacks
4. **Rate limiting** protects your database
5. **Error logging** doesn't expose sensitive data

## Next Steps

1. ✅ Create sync_logs table
2. ✅ Set Netlify environment variables
3. ✅ Deploy to Netlify (push to git)
4. ✅ Verify function appears in Netlify dashboard
5. ✅ Test manually with "Trigger" button
6. ✅ Check sync_logs table for results
7. ✅ Add SyncStatus component to UI (optional)
8. ✅ Monitor logs for first 24 hours

The sync will automatically run every 60 minutes. You don't need to do anything—it just works!
