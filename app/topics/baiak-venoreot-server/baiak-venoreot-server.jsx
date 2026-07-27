import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-venoreot-server');
}

export default function BaiakVenoreotServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-venoreot-server" />;
}
