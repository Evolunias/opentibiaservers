import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-venoreot-wiki');
}

export default function FreshStartVenoreotWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-venoreot-wiki" />;
}
