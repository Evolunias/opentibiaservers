import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dragon-ball-legend-download');
}

export default function CustomDragonBallLegendDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-dragon-ball-legend-download" />;
}
