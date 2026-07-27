import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-venoreot-register');
}

export default function ActiveVenoreotRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-venoreot-register" />;
}
