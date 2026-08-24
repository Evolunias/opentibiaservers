'use client';

import Image from 'next/image';
import { useState } from 'react';
import { buildServerLogoFallback, getServerLogo } from '@/lib/server-logos';

function GeneratedServerMark({ logo }) {
  return (
    <svg
      viewBox="0 0 260 180"
      role="img"
      aria-label={logo.alt}
      className="server-logo__generated"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id={logo.gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={logo.colors.start} />
          <stop offset="1" stopColor={logo.colors.end} />
        </linearGradient>
      </defs>
      <rect width="260" height="180" rx="22" fill={`url(#${logo.gradientId})`} />
      <path d="M130 20 199 45v48c0 36-25 58-69 72-44-14-69-36-69-72V45l69-25Z" fill="none" stroke={logo.colors.accent} strokeWidth="5" opacity=".8" />
      <path d="M38 133h184" stroke={logo.colors.accent} strokeWidth="2" opacity=".35" />
      <text x="130" y="106" textAnchor="middle" fill="#fff" fontSize="58" fontWeight="900" fontFamily="Arial, sans-serif" letterSpacing="2">
        {logo.initials}
      </text>
      <text x="130" y="151" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="700" fontFamily="Arial, sans-serif" opacity=".92">
        {logo.shortName}
      </text>
    </svg>
  );
}

export default function ServerLogo({ server, size = 'row' }) {
  const logo = getServerLogo(server);
  const [failedSrc, setFailedSrc] = useState(null);
  const visibleLogo = logo.type === 'primary' && failedSrc === logo.src
    ? buildServerLogoFallback(server)
    : logo;

  return (
    <div
      className={`server-logo server-logo--${size} server-logo--${visibleLogo.type}`}
      data-logo-source={visibleLogo.type === 'primary' ? visibleLogo.source_type : 'deterministic-fallback'}
    >
      {visibleLogo.type === 'primary' ? (
        <Image
          src={visibleLogo.src}
          alt={visibleLogo.alt}
          width={visibleLogo.width || 260}
          height={visibleLogo.height || 180}
          onError={() => setFailedSrc(visibleLogo.src)}
        />
      ) : <GeneratedServerMark logo={visibleLogo} />}
    </div>
  );
}

export { getServerLogo };
