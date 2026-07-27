import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-venoreot-login');
}

export default function TopVenoreotLoginKeywordPage() {
  return <StaticKeywordPage slug="top-venoreot-login" />;
}
