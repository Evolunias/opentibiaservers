import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-old-school-server-uk');
}

export default function DragonBallLegendOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-old-school-server-uk" />;
}
