import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-venoreot-client');
}

export default function FreshStartVenoreotClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-venoreot-client" />;
}
