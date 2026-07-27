import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibia-private-server-north-america');
}

export default function RealMapTibiaPrivateServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibia-private-server-north-america" />;
}
