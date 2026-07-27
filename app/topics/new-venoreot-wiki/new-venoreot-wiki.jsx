import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-venoreot-wiki');
}

export default function NewVenoreotWikiKeywordPage() {
  return <StaticKeywordPage slug="new-venoreot-wiki" />;
}
