import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-tibia-private-server-europe');
}

export default function CustomMapTibiaPrivateServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="custom-map-tibia-private-server-europe" />;
}
