import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-venoreot-client');
}

export default function TopVenoreotClientKeywordPage() {
  return <StaticKeywordPage slug="top-venoreot-client" />;
}
