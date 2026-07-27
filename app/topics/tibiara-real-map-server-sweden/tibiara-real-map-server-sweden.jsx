import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-real-map-server-sweden');
}

export default function TibiaraRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiara-real-map-server-sweden" />;
}
