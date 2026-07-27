import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-dragon-ball-legend-download');
}

export default function OfficialDragonBallLegendDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-dragon-ball-legend-download" />;
}
