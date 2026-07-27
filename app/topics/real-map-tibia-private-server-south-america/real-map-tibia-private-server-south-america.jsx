import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibia-private-server-south-america');
}

export default function RealMapTibiaPrivateServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibia-private-server-south-america" />;
}
