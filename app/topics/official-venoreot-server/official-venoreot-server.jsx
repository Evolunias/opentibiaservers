import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-venoreot-server');
}

export default function OfficialVenoreotServerKeywordPage() {
  return <StaticKeywordPage slug="official-venoreot-server" />;
}
