import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-venoreot-ot-server');
}

export default function PopularVenoreotOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-venoreot-ot-server" />;
}
