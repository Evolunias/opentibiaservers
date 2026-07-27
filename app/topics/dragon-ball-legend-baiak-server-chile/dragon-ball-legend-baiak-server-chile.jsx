import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-baiak-server-chile');
}

export default function DragonBallLegendBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-baiak-server-chile" />;
}
