import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-dragon-ball-legend-wiki');
}

export default function BestDragonBallLegendWikiKeywordPage() {
  return <StaticKeywordPage slug="best-dragon-ball-legend-wiki" />;
}
