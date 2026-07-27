import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-old-school-server-usa');
}

export default function DragonBallLegendOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-old-school-server-usa" />;
}
