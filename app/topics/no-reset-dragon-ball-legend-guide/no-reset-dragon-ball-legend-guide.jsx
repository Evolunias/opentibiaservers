import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-dragon-ball-legend-guide');
}

export default function NoResetDragonBallLegendGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-dragon-ball-legend-guide" />;
}
