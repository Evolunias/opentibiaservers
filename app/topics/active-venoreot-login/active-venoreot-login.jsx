import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-venoreot-login');
}

export default function ActiveVenoreotLoginKeywordPage() {
  return <StaticKeywordPage slug="active-venoreot-login" />;
}
