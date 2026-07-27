import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-dragon-ball-legend-wiki');
}

export default function RealMapDragonBallLegendWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-dragon-ball-legend-wiki" />;
}
