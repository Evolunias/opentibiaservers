import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-venoreot-register');
}

export default function BestVenoreotRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-venoreot-register" />;
}
