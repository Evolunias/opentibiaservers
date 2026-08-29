import CyleriaWikiPage from '@/app/components/CyleriaWikiPage';
import { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  const metadata = buildCanonicalServerMetadata('cyleria');
  return {
    ...metadata,
    title: 'Cyleria 8.60 Open Tibia Server | Mobile, Rates, Events & PvP Wiki',
    description: 'Cyleria 8.60 Wiki covering the Polish Open Tibia server, PC and Android client, EXP stages, Open PvP rules, Tower Siege, events, Cyleriopedia, and no-reset progression.',
    keywords: ['Cyleria', 'Cyleria 8.60', 'Cyleria server', 'Cyleria OTS', 'Cyleria mobile client', 'Cyleria rates', 'Cyleria Tower Siege'],
    alternates: { canonical: '/servers/cyleria' },
  };
}

export default function Page() {
  return <CyleriaWikiPage />;
}
