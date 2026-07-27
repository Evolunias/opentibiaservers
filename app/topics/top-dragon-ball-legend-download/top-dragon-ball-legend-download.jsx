import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-dragon-ball-legend-download');
}

export default function TopDragonBallLegendDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-dragon-ball-legend-download" />;
}
