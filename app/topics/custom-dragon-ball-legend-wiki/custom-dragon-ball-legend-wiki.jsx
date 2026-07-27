import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dragon-ball-legend-wiki');
}

export default function CustomDragonBallLegendWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-dragon-ball-legend-wiki" />;
}
