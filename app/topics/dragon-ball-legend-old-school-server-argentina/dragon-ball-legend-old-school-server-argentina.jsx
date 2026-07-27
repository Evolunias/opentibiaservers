import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-old-school-server-argentina');
}

export default function DragonBallLegendOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-old-school-server-argentina" />;
}
