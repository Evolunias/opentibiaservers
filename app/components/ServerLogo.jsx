'use client';

import Image from 'next/image';

const logoRules = [
  { match: /(^|\s|[/.-])ezodus([\s/.:_-]|$)/i, src: '/images/server-logos/ezodus.png', alt: 'Ezodus official logo' },
  { match: /baiak[\s-]*ilusion/i, src: '/images/server-logos/baiak-ilusion.jpg', alt: 'Baiak Ilusion logo' },
  { match: /demolidores/i, src: '/images/server-logos/demolidores.png', alt: 'Demolidores logo' },
  { match: /koliseu\s*ot/i, src: '/images/server-logos/koliseuot.png', alt: 'KoliseuOT logo' },
];

const directoryLogo = {
  src: '/images/server-logos/opentibiaservers-directory.png',
  alt: 'OpenTibiaServers.com directory logo',
};

export function getServerLogo(server) {
  const identity = [server?.name, server?.slug, server?.host]
    .filter(Boolean)
    .join(' ');
  return logoRules.find(({ match }) => match.test(identity)) || directoryLogo;
}

export default function ServerLogo({ server, size = 'row' }) {
  const logo = getServerLogo(server);

  return (
    <div className={`server-logo server-logo--${size}`}>
      <Image src={logo.src} alt={logo.alt} width={260} height={180} />
    </div>
  );
}
