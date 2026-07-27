import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-dragon-ball-legend-guide');
}

export default function NewDragonBallLegendGuideKeywordPage() {
  return <StaticKeywordPage slug="new-dragon-ball-legend-guide" />;
}
