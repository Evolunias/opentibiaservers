import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-venoreot-client');
}

export default function PopularVenoreotClientKeywordPage() {
  return <StaticKeywordPage slug="popular-venoreot-client" />;
}
