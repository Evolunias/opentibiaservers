import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-tibia-private-server-sweden');
}

export default function CustomMapTibiaPrivateServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="custom-map-tibia-private-server-sweden" />;
}
