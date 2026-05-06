'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase';

export default function SyncStatus() {
  const [lastSync, setLastSync] = useState(null);
  const [loading, setLoading] = useState(true);
  const [syncStatus, setSyncStatus] = useState('unknown');

  useEffect(() => {
    fetchSyncStatus();
    // Refresh every 5 minutes
    const interval = setInterval(fetchSyncStatus, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  async function fetchSyncStatus() {
    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from('sync_logs')
        .select('*')
        .order('timestamp', { ascending: false })
        .limit(1)
        .single();

      if (error) throw error;

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
    return (
      <div className="text-xs text-gray-500">
        Loading sync status...
      </div>
    );
  }

  const lastSyncTime = new Date(lastSync.timestamp);
  const timeAgo = getTimeAgo(lastSyncTime);
  const statusColor = syncStatus === 'success' ? 'text-green-600' : 'text-red-600';
  const statusIcon = syncStatus === 'success' ? '✓' : '✗';

  return (
    <div className={`text-xs ${statusColor}`}>
      {statusIcon} Last sync: {timeAgo}
      {lastSync.fetched && (
        <span className="ml-2">
          ({lastSync.inserted} new, {lastSync.updated} updated)
        </span>
      )}
    </div>
  );
}

function getTimeAgo(date) {
  const seconds = Math.floor((new Date() - date) / 1000);
  
  let interval = seconds / 31536000;
  if (interval > 1) return Math.floor(interval) + ' years ago';
  
  interval = seconds / 2592000;
  if (interval > 1) return Math.floor(interval) + ' months ago';
  
  interval = seconds / 86400;
  if (interval > 1) return Math.floor(interval) + ' days ago';
  
  interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + ' hours ago';
  
  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + ' minutes ago';
  
  return Math.floor(seconds) + ' seconds ago';
}
