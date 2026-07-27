import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-dragon-ball-legend-guide');
}

export default function FreshStartDragonBallLegendGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-dragon-ball-legend-guide" />;
}
