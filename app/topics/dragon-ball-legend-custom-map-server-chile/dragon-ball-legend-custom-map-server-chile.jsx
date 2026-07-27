import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-custom-map-server-chile');
}

export default function DragonBallLegendCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-custom-map-server-chile" />;
}
