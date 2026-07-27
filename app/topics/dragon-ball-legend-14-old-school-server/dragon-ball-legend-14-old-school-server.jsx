import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-14-old-school-server');
}

export default function DragonBallLegend14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-14-old-school-server" />;
}
