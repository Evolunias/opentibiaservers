import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-venoreot-login');
}

export default function PopularVenoreotLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-venoreot-login" />;
}
