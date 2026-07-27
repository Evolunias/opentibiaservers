import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-dragon-ball-legend-wiki');
}

export default function OfficialDragonBallLegendWikiKeywordPage() {
  return <StaticKeywordPage slug="official-dragon-ball-legend-wiki" />;
}
