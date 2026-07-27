import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-venoreot-login');
}

export default function FreshStartVenoreotLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-venoreot-login" />;
}
