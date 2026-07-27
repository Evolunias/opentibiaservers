import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-venoreot-login');
}

export default function CustomVenoreotLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-venoreot-login" />;
}
