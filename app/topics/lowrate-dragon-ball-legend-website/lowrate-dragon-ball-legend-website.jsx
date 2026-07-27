import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-dragon-ball-legend-website');
}

export default function LowrateDragonBallLegendWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-dragon-ball-legend-website" />;
}
