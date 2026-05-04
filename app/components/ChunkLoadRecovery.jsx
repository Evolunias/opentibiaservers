'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'chunk-load-recovery-attempted';

function isChunkLoadError(error) {
  if (!error) return false;

  const message = typeof error === 'string' ? error : error.message || error.reason?.message || '';
  const name = error.name || error.reason?.name || '';

  return (
    name === 'ChunkLoadError' ||
    message.includes('ChunkLoadError') ||
    message.includes('Loading chunk') ||
    message.includes('CSS chunk load failed') ||
    message.includes('failed to fetch') ||
    message.includes('hydrate')
  );
}

export default function ChunkLoadRecovery() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const recover = (error) => {
      if (!isChunkLoadError(error)) return;
      if (typeof sessionStorage === 'undefined') return;
      if (sessionStorage.getItem(STORAGE_KEY) === '1') return;

      sessionStorage.setItem(STORAGE_KEY, '1');
      if (typeof window !== 'undefined') {
        // Force a hard reload to clear all cached modules
        window.location.href = window.location.href;
      }
    };

    if (typeof window === 'undefined') return;

    const onError = (event) => {
      recover(event.error || event);
    };

    const onUnhandledRejection = (event) => {
      recover(event.reason || event);
    };

    window.addEventListener('error', onError, true);
    window.addEventListener('unhandledrejection', onUnhandledRejection, true);

    return () => {
      window.removeEventListener('error', onError, true);
      window.removeEventListener('unhandledrejection', onUnhandledRejection, true);
    };
  }, []);

  if (!mounted) return null;

  return null;
}
