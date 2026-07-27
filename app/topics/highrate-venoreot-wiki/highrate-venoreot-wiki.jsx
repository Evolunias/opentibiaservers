import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-venoreot-wiki');
}

export default function HighrateVenoreotWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-venoreot-wiki" />;
}
