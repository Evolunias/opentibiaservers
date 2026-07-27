import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-old-school-server-latin-america');
}

export default function DragonBallLegendOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-old-school-server-latin-america" />;
}
