import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-venoreot-register');
}

export default function CurrentVenoreotRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-venoreot-register" />;
}
