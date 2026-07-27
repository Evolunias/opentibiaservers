import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-real-map-server-sweden');
}

export default function OlderaRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="oldera-real-map-server-sweden" />;
}
