import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-dragon-ball-legend-download');
}

export default function CurrentDragonBallLegendDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-dragon-ball-legend-download" />;
}
