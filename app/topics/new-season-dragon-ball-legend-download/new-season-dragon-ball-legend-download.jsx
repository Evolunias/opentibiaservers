import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-dragon-ball-legend-download');
}

export default function NewSeasonDragonBallLegendDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-dragon-ball-legend-download" />;
}
