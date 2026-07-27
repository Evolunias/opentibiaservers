import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-old-school-server-europe');
}

export default function DragonBallLegendOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-old-school-server-europe" />;
}
