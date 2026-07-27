import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-venoreot-client');
}

export default function ActiveVenoreotClientKeywordPage() {
  return <StaticKeywordPage slug="active-venoreot-client" />;
}
