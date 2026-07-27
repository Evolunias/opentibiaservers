import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-venoreot-client');
}

export default function OfficialVenoreotClientKeywordPage() {
  return <StaticKeywordPage slug="official-venoreot-client" />;
}
