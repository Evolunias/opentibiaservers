import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-server-list-sweden');
}

export default function RealMapServerListSwedenKeywordPage() {
  return <StaticKeywordPage slug="real-map-server-list-sweden" />;
}
