import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibia-private-server-canada');
}

export default function RealMapTibiaPrivateServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibia-private-server-canada" />;
}
