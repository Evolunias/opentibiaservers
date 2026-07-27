import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-venoreot-wiki');
}

export default function CustomVenoreotWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-venoreot-wiki" />;
}
