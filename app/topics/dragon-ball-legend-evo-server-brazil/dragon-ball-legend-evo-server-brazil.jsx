import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-evo-server-brazil');
}

export default function DragonBallLegendEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-evo-server-brazil" />;
}
