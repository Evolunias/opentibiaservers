import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-evo-server-argentina');
}

export default function DragonBallLegendEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-evo-server-argentina" />;
}
