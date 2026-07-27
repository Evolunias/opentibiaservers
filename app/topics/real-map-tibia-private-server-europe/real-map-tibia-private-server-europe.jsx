import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibia-private-server-europe');
}

export default function RealMapTibiaPrivateServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibia-private-server-europe" />;
}
