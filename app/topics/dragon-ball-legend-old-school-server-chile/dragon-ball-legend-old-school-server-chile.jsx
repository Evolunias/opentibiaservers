import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-old-school-server-chile');
}

export default function DragonBallLegendOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-old-school-server-chile" />;
}
