import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-wiki');
}

export default function DragonBallLegendWikiKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-wiki" />;
}
