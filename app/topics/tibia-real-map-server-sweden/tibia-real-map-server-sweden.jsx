import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-real-map-server-sweden');
}

export default function TibiaRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibia-real-map-server-sweden" />;
}
