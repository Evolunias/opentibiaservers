import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-dragon-ball-legend-website');
}

export default function CurrentDragonBallLegendWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-dragon-ball-legend-website" />;
}
