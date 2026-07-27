import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-13-old-school-server');
}

export default function DragonBallLegend13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-13-old-school-server" />;
}
