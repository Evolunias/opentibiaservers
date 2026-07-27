import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-dragon-ball-legend-wiki');
}

export default function TopDragonBallLegendWikiKeywordPage() {
  return <StaticKeywordPage slug="top-dragon-ball-legend-wiki" />;
}
