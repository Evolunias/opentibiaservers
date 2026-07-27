import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-tibia-private-server-canada');
}

export default function CustomMapTibiaPrivateServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-tibia-private-server-canada" />;
}
