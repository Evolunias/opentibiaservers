import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-venoreot-client');
}

export default function CurrentVenoreotClientKeywordPage() {
  return <StaticKeywordPage slug="current-venoreot-client" />;
}
