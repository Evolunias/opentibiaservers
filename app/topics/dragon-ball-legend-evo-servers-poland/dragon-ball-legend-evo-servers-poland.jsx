import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-evo-servers-poland');
}

export default function DragonBallLegendEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-evo-servers-poland" />;
}
