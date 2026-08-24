'use client';

import Image from 'next/image';

const logoRules = [
  { match: /baiak[\s-]*ilusion/i, src: '/images/server-logos/baiak-ilusion.jpg', alt: 'Baiak Ilusion logo' },
  { match: /demolidores/i, src: '/images/server-logos/demolidores.png', alt: 'Demolidores logo' },
  { match: /koliseu\s*ot/i, src: '/images/server-logos/koliseuot.png', alt: 'KoliseuOT logo' },
  { match: /otservlist/i, src: '/images/server-logos/otservlist.jpg', alt: 'OTServlist logo' },
];

export function getServerLogo(server) {
  const identity = [server?.name, server?.slug, server?.host, server?.source]
    .filter(Boolean)
    .join(' ');
  return logoRules.find(({ match }) => match.test(identity)) || null;
}

export default function ServerLogo({ server, size = 'row' }) {
  const logo = getServerLogo(server);

  return (
    <div className={`server-logo server-logo--${size}`} aria-hidden={!logo}>
      {logo ? (
        <Image src={logo.src} alt={logo.alt} width={260} height={180} />
      ) : (
        <span>{String(server?.name || 'OT').trim().slice(0, 2).toUpperCase()}</span>
      )}
    </div>
  );
}
