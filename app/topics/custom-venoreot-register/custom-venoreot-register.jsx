import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-venoreot-register');
}

export default function CustomVenoreotRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-venoreot-register" />;
}
