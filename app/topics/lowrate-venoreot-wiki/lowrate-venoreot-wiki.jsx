import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-venoreot-wiki');
}

export default function LowrateVenoreotWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-venoreot-wiki" />;
}
