import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-evo-server-usa');
}

export default function DragonBallLegendEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-evo-server-usa" />;
}
