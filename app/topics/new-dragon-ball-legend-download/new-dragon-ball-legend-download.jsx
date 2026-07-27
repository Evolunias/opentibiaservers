import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-dragon-ball-legend-download');
}

export default function NewDragonBallLegendDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-dragon-ball-legend-download" />;
}
