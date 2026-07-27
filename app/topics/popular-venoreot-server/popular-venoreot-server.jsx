import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-venoreot-server');
}

export default function PopularVenoreotServerKeywordPage() {
  return <StaticKeywordPage slug="popular-venoreot-server" />;
}
