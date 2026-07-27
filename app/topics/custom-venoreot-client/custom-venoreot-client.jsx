import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-venoreot-client');
}

export default function CustomVenoreotClientKeywordPage() {
  return <StaticKeywordPage slug="custom-venoreot-client" />;
}
