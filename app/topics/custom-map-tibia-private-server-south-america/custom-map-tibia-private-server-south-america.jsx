import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-tibia-private-server-south-america');
}

export default function CustomMapTibiaPrivateServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-tibia-private-server-south-america" />;
}
