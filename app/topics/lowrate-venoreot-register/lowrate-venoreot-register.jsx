import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-venoreot-register');
}

export default function LowrateVenoreotRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-venoreot-register" />;
}
