import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-evo-server-poland');
}

export default function DragonBallLegendEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-evo-server-poland" />;
}
