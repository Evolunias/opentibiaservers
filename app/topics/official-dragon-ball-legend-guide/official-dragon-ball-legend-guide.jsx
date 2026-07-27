import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-dragon-ball-legend-guide');
}

export default function OfficialDragonBallLegendGuideKeywordPage() {
  return <StaticKeywordPage slug="official-dragon-ball-legend-guide" />;
}
