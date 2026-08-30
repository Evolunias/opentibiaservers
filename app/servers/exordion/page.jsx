import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

import ExordionWikiPage from '@/app/components/ExordionWikiPage';

export const revalidate = 3600;

export function generateMetadata() {
  return {
    title: 'Exordion | OpenTibiaServers Wiki',
    description: 'A detailed Exordion Open Tibia server guide covering its world, progression, systems, PvP, client path, sources, and current verification.',
  };
}

export default function Page() {
  return <ExordionWikiPage />;
}
