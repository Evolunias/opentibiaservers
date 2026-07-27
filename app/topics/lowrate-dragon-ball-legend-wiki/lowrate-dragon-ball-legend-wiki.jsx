import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-dragon-ball-legend-wiki');
}

export default function LowrateDragonBallLegendWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-dragon-ball-legend-wiki" />;
}
