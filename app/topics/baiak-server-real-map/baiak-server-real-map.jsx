import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-real-map');
}

export default function BaiakServerRealMapKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-real-map" />;
}
