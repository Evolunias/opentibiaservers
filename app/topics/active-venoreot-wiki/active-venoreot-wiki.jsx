import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-venoreot-wiki');
}

export default function ActiveVenoreotWikiKeywordPage() {
  return <StaticKeywordPage slug="active-venoreot-wiki" />;
}
