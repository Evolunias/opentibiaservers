import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-old-school-server-sweden');
}

export default function DragonBallLegendOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-old-school-server-sweden" />;
}
