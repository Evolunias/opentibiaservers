import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-venoreot-login');
}

export default function LowrateVenoreotLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-venoreot-login" />;
}
