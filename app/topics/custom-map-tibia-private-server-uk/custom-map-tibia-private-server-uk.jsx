import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-tibia-private-server-uk');
}

export default function CustomMapTibiaPrivateServerUkKeywordPage() {
  return <StaticKeywordPage slug="custom-map-tibia-private-server-uk" />;
}
