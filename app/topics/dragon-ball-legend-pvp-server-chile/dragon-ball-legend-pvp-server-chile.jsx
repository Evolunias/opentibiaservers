import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-pvp-server-chile');
}

export default function DragonBallLegendPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-pvp-server-chile" />;
}
