# Supabase Edge Function Setup Guide

## Overview

The sync function is a **Supabase Edge Function** that:
- Fetches server listings from otservlist.org (or alternative sources)
- Parses and upserts data directly to your Supabase database
- Can be called manually via HTTP or scheduled with a cron service
- Runs in Deno (TypeScript) runtime

**Important**: otservlist.org does not appear to expose a public JSON API. The function will attempt to fetch from alternative sources like **otservlist.world** which has a documented API.

## Files

- **Edge Function**: `supabase/functions/sync-servers/index.ts`
- **Frontend Helper**: `lib/supabase.js` (includes `triggerServerSync()`)

## Setup Steps

### 1. Deploy the Edge Function

```bash
# Install Supabase CLI (if not already installed)
npm install -g supabase

# Link to your Supabase project
supabase link --project-ref zgjthtaesusdfeivbzja

# Deploy the function
supabase functions deploy sync-servers
```

### 2. Set Environment Variables in Supabase

Go to **Supabase Dashboard → Project Settings → Edge Functions → Environment Variables**

Add these variables:

| Variable | Value |
|----------|-------|
| `SUPABASE_URL` | Your Supabase URL (e.g., `https://zgjthtaesusdfeivbzja.supabase.co`) |
| `SUPABASE_SERVICE_ROLE_KEY` | Your Service Role Key |
| `SYNC_TOKEN` | Optional: Random secure string for API security |

> **Note**: `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are system variables that should already be available, but explicitly add them if needed.

### 3. Test the Function Manually

```bash
# Test locally
supabase functions serve

# In another terminal, trigger the function
curl -X POST http://localhost:54321/functions/v1/sync-servers \
  -H "Content-Type: application/json" \
  -H "x-sync-token: your-sync-token"
```

Or use the Supabase dashboard function editor to test directly.

### 4. Call from Frontend (Optional)

```javascript
// In your component
import { triggerServerSync } from '@/lib/supabase';

const handleSync = async () => {
  const result = await triggerServerSync('your-sync-token');
  if (result.success) {
    console.log('Servers synced:', result.stats);
  }
};
```

## Scheduling the Sync

Supabase Edge Functions don't have built-in scheduling. You have these options:

### Option A: Use a Cron Service (Recommended)

Services like **EasyCron**, **cron-job.org**, or **AWS EventBridge** can call your function every 15 minutes:

```
POST https://zgjthtaesusdfeivbzja.supabase.co/functions/v1/sync-servers
Header: x-sync-token: your-sync-token
```

Set cron expression: `0 */15 * * * *` (every 15 minutes)

### Option B: Use a Netlify Scheduled Function (Fallback)

Keep the original Netlify function (`netlify/functions/sync-servers.js`) that calls this Edge Function:

```javascript
// In netlify/functions/sync-servers.js
const response = await fetch(
  'https://zgjthtaesusdfeivbzja.supabase.co/functions/v1/sync-servers',
  {
    method: 'POST',
    headers: {
      'x-sync-token': process.env.SYNC_TOKEN,
    },
  }
);
```

### Option C: Frontend Periodic Sync

Call the function on component mount (less reliable, requires user to visit site):

```javascript
useEffect(() => {
  // Sync on app load
  triggerServerSync(process.env.NEXT_PUBLIC_SYNC_TOKEN);
  
  // Sync every 15 minutes
  const interval = setInterval(() => {
    triggerServerSync(process.env.NEXT_PUBLIC_SYNC_TOKEN);
  }, 15 * 60 * 1000);
  
  return () => clearInterval(interval);
}, []);
```

## API Reference

### Edge Function Endpoint

```
POST https://zgjthtaesusdfeivbzja.supabase.co/functions/v1/sync-servers

Headers:
  x-sync-token: your-sync-token (optional)

Response:
{
  "success": true,
  "timestamp": "2024-01-15T10:30:00Z",
  "stats": {
    "updated": 150,
    "errors": 0
  }
}
```

### Error Response

```json
{
  "success": false,
  "timestamp": "2024-01-15T10:30:00Z",
  "error": "Could not fetch servers from otservlist.org"
}
```

## Monitoring

### View Function Logs

```bash
# Stream logs locally
supabase functions fetch-logs sync-servers

# Or via Supabase dashboard:
# Project Settings → Edge Functions → sync-servers → Logs tab
```

### Database

Check if servers are being synced:

```sql
SELECT COUNT(*) FROM servers;
SELECT MAX(last_check) FROM servers;
SELECT * FROM servers ORDER BY last_check DESC LIMIT 5;
```

## Troubleshooting

### Issue: "ReferenceError: require is not defined"

**Solution**: Use ES modules with `import`. This is already fixed in the TypeScript version.

### Issue: "SUPABASE_URL is undefined"

**Solution**: Add `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` to Edge Function environment variables in Supabase dashboard.

### Issue: "Missing Supabase credentials"

**Solution**: Verify environment variables are set in:
- Supabase Dashboard → Project Settings → Edge Functions → Environment Variables

### Issue: "Could not fetch servers from otservlist.org"

**Cause**: otservlist.org does not expose a public JSON API. The function attempts fallback sources.

**Solution**: The function now tries:
1. **otservlist.org** endpoints (primary)
2. **otservlist.world** API (fallback)

If both fail, you need to:
1. Verify the actual OTS list API endpoint exists and is reachable
2. Update the `fetchFromOtservlist()` function with the correct endpoint
3. Or switch to a different data source that has a public API

**Test if otservlist.world API works**:
```bash
curl https://otservlist.world/api/servers
```

If that returns JSON data, the function should work. Otherwise, you may need to:
- Use a different OTS list service
- Implement web scraping (more complex)
- Manually populate the database from another source

### Issue: Function runs but doesn't update database

**Causes**:
1. Service Role Key is incorrect or expired
2. Database permissions are restricted (check RLS policies)
3. Network connectivity from Supabase to API is blocked

**Solutions**:
1. Check Service Role Key in Supabase Project Settings
2. Verify RLS policies allow writes from service role
3. Check function logs for specific errors
4. Test the API endpoint manually before deploying

## Deployment to Production

### Push to GitHub

```bash
git add supabase/functions/sync-servers/
git commit -m "Add Supabase Edge Function for server sync"
git push origin main
```

### Deploy via Supabase CLI

```bash
supabase functions deploy sync-servers --project-ref zgjthtaesusdfeivbzja
```

### Verify Deployment

```bash
# List deployed functions
supabase functions list

# Test the deployed function
curl -X POST https://zgjthtaesusdfeivbzja.supabase.co/functions/v1/sync-servers \
  -H "x-sync-token: your-sync-token"
```

## Architecture

```
┌─────────────────────┐
│   Frontend (Next.js) │
└──────────┬──────────┘
           │ fetch()
           ▼
┌──────────────────────────────────────┐
│  Supabase Edge Function              │
│  (sync-servers/index.ts)             │
│                                      │
│  1. Fetch from otservlist.org       │
│  2. Parse server data               │
│  3. Upsert to database              │
└──────────────┬───────────────────────┘
               │
               ▼
┌──────────────────────┐
│  Supabase SQL        │
│  (servers table)     │
└──────────────────────┘
```

## Performance Notes

- **Batch size**: 10 servers per request (prevents timeouts)
- **Timeout**: Edge Functions have ~10 minute execution limit
- **Response time**: ~2-5 seconds for ~150 servers
- **Stale servers**: Marked offline after 5 minutes without update

## Security

1. **Service Role Key** is kept server-side only (never exposed)
2. **SYNC_TOKEN** protects the endpoint (optional)
3. **Public Anon Key** is used by frontend to read data only
4. **No sensitive data** is exposed to client code
