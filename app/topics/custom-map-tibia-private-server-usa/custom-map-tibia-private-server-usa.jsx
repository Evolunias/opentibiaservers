import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-tibia-private-server-usa');
}

export default function CustomMapTibiaPrivateServerUsaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-tibia-private-server-usa" />;
}
