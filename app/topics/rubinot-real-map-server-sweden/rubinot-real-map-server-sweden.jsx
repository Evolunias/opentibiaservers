import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-real-map-server-sweden');
}

export default function RubinotRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="rubinot-real-map-server-sweden" />;
}
