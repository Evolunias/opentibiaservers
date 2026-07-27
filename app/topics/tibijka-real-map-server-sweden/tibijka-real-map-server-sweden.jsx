import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-real-map-server-sweden');
}

export default function TibijkaRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibijka-real-map-server-sweden" />;
}
