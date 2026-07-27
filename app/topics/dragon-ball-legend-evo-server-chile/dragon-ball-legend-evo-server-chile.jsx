import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-evo-server-chile');
}

export default function DragonBallLegendEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-evo-server-chile" />;
}
