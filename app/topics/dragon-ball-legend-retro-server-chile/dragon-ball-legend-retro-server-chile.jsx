import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-retro-server-chile');
}

export default function DragonBallLegendRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-retro-server-chile" />;
}
