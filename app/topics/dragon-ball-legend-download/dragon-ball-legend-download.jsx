import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-download');
}

export default function DragonBallLegendDownloadKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-download" />;
}
