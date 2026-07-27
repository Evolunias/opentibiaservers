import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-dragon-ball-legend-wiki');
}

export default function HighrateDragonBallLegendWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-dragon-ball-legend-wiki" />;
}
