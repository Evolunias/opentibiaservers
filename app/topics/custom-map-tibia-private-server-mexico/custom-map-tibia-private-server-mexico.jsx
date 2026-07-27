import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-tibia-private-server-mexico');
}

export default function CustomMapTibiaPrivateServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="custom-map-tibia-private-server-mexico" />;
}
