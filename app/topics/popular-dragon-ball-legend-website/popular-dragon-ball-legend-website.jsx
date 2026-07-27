import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-dragon-ball-legend-website');
}

export default function PopularDragonBallLegendWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-dragon-ball-legend-website" />;
}
