import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-dragon-ball-legend-guide');
}

export default function OldSchoolDragonBallLegendGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-dragon-ball-legend-guide" />;
}
