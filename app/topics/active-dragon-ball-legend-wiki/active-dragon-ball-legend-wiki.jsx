import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dragon-ball-legend-wiki');
}

export default function ActiveDragonBallLegendWikiKeywordPage() {
  return <StaticKeywordPage slug="active-dragon-ball-legend-wiki" />;
}
