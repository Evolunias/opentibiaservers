import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-tibia-private-server-germany');
}

export default function CustomMapTibiaPrivateServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="custom-map-tibia-private-server-germany" />;
}
