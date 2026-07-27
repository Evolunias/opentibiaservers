import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-venoreot-register');
}

export default function TopVenoreotRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-venoreot-register" />;
}
