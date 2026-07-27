import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-dragon-ball-legend-download');
}

export default function BestDragonBallLegendDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-dragon-ball-legend-download" />;
}
