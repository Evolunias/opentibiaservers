import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-dragon-ball-legend-ot');
}

export default function OldSchoolDragonBallLegendOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-dragon-ball-legend-ot" />;
}
