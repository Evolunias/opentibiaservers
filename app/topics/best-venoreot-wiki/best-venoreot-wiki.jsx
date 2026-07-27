import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-venoreot-wiki');
}

export default function BestVenoreotWikiKeywordPage() {
  return <StaticKeywordPage slug="best-venoreot-wiki" />;
}
