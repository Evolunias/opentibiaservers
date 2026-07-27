import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-old-school-server-germany');
}

export default function DragonBallLegendOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-old-school-server-germany" />;
}
