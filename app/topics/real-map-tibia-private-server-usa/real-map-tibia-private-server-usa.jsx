import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibia-private-server-usa');
}

export default function RealMapTibiaPrivateServerUsaKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibia-private-server-usa" />;
}
