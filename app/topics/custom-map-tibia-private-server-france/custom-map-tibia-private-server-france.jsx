import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-tibia-private-server-france');
}

export default function CustomMapTibiaPrivateServerFranceKeywordPage() {
  return <StaticKeywordPage slug="custom-map-tibia-private-server-france" />;
}
