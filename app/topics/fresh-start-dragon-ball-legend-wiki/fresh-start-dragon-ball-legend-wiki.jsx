import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-dragon-ball-legend-wiki');
}

export default function FreshStartDragonBallLegendWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-dragon-ball-legend-wiki" />;
}
