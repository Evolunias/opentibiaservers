import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-dragon-ball-legend-download');
}

export default function HighrateDragonBallLegendDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-dragon-ball-legend-download" />;
}
