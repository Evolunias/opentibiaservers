import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-pvpe-server-chile');
}

export default function DragonBallLegendPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-pvpe-server-chile" />;
}
