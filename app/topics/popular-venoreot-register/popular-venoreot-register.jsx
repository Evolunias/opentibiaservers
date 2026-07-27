import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-venoreot-register');
}

export default function PopularVenoreotRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-venoreot-register" />;
}
