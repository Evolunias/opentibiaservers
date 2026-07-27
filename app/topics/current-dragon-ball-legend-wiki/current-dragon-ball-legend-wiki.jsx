import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-dragon-ball-legend-wiki');
}

export default function CurrentDragonBallLegendWikiKeywordPage() {
  return <StaticKeywordPage slug="current-dragon-ball-legend-wiki" />;
}
