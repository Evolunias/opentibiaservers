import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibia-private-server-sweden');
}

export default function RealMapTibiaPrivateServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibia-private-server-sweden" />;
}
