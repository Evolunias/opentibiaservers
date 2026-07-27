import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-venoreot-wiki');
}

export default function NoResetVenoreotWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-venoreot-wiki" />;
}
