import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-real-map-server-sweden');
}

export default function ElderaRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="eldera-real-map-server-sweden" />;
}
