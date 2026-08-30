import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

import EvoluniaWikiPage from '@/app/components/EvoluniaWikiPage';

export const revalidate = 3600;

export function generateMetadata() {
  return {
    title: 'Evolunia Server Guide: Rates, Systems, PvP & 10.98 Features',
    description: 'An evidence-led Evolunia 10.98 guide covering staged rates, dynamic monsters, orb systems, equipment attributes, quests, PvP rules, launch history, and sources.',
  };
}

export default function Page() {
  return <EvoluniaWikiPage />;
}
