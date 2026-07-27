import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-dragon-ball-legend-website');
}

export default function TopDragonBallLegendWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-dragon-ball-legend-website" />;
}
