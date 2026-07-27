import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-venoreot-login');
}

export default function CurrentVenoreotLoginKeywordPage() {
  return <StaticKeywordPage slug="current-venoreot-login" />;
}
