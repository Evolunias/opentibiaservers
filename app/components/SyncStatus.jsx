'use client';

import { useEffect, useState } from 'react';
import { createClient, isSupabaseConfigured } from '@/lib/supabase';

export default function SyncStatus() {
  const [lastSync, setLastSync] = useState(null);
  const [loading, setLoading] = useState(true);
  const [syncStatus, setSyncStatus] = useState('unknown');

  useEffect(() => {
    fetchSyncStatus();
    const interval = setInterval(fetchSyncStatus, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  async function fetchSyncStatus() {
    if (!isSupabaseConfigured) {
      setLoading(false);
      setSyncStatus('unknown');
      return;
    }

    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from('sync_logs')
        .select('*')
        .order('timestamp', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (error) {
        if (error.code === '42P01') {
          setLoading(false);
          setSyncStatus('unknown');
          return;
        }
        throw error;
      }

      if (data) {
        setLastSync(data);
        setSyncStatus(data.success ? 'success' : 'failed');
      }
    } catch (err) {
      console.error('Failed to fetch sync status:', err);
      setSyncStatus('unknown');
    } finally {
      setLoading(false);
    }
  }

  if (loading || !lastSync) {
    return <div className="text-xs text-gray-500">Sync status unavailable</div>;
  }

  const timeAgo = getTimeAgo(new Date(lastSync.timestamp));
  const statusColor = syncStatus === 'success' ? 'text-green-700' : 'text-red-700';
  const statusLabel = syncStatus === 'success' ? 'Synced' : 'Sync failed';

  return (
    <div className={`text-xs ${statusColor}`}>
      {statusLabel}: {timeAgo}
      {lastSync.fetched ? (
        <span className="ml-2">
          ({lastSync.inserted || 0} new, {lastSync.updated || 0} updated)
        </span>
      ) : null}
    </div>
  );
}

function getTimeAgo(date) {
  const seconds = Math.floor((new Date() - date) / 1000);

  let interval = seconds / 31536000;
  if (interval > 1) return `${Math.floor(interval)} years ago`;

  interval = seconds / 2592000;
  if (interval > 1) return `${Math.floor(interval)} months ago`;

  interval = seconds / 86400;
  if (interval > 1) return `${Math.floor(interval)} days ago`;

  interval = seconds / 3600;
  if (interval > 1) return `${Math.floor(interval)} hours ago`;

  interval = seconds / 60;
  if (interval > 1) return `${Math.floor(interval)} minutes ago`;

  return `${Math.max(0, Math.floor(seconds))} seconds ago`;
}
