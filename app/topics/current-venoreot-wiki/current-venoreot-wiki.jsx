import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-venoreot-wiki');
}

export default function CurrentVenoreotWikiKeywordPage() {
  return <StaticKeywordPage slug="current-venoreot-wiki" />;
}
