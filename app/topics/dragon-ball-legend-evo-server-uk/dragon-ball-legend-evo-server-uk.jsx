import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-evo-server-uk');
}

export default function DragonBallLegendEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-evo-server-uk" />;
}
