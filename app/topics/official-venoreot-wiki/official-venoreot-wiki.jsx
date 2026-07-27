import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-venoreot-wiki');
}

export default function OfficialVenoreotWikiKeywordPage() {
  return <StaticKeywordPage slug="official-venoreot-wiki" />;
}
