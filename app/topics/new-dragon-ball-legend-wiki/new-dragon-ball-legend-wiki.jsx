import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-dragon-ball-legend-wiki');
}

export default function NewDragonBallLegendWikiKeywordPage() {
  return <StaticKeywordPage slug="new-dragon-ball-legend-wiki" />;
}
