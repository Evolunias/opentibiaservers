import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-venoreot-login');
}

export default function BestVenoreotLoginKeywordPage() {
  return <StaticKeywordPage slug="best-venoreot-login" />;
}
