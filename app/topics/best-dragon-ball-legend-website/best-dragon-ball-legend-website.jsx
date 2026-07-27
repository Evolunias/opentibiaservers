import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-dragon-ball-legend-website');
}

export default function BestDragonBallLegendWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-dragon-ball-legend-website" />;
}
