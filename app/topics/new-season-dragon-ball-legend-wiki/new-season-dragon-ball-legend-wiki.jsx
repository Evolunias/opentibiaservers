import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-dragon-ball-legend-wiki');
}

export default function NewSeasonDragonBallLegendWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-dragon-ball-legend-wiki" />;
}
