import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-dragon-ball-legend-website');
}

export default function FreshStartDragonBallLegendWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-dragon-ball-legend-website" />;
}
