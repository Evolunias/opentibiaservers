import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dragon-ball-legend-guide');
}

export default function ActiveDragonBallLegendGuideKeywordPage() {
  return <StaticKeywordPage slug="active-dragon-ball-legend-guide" />;
}
