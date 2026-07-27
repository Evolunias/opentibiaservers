import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibia-private-server-germany');
}

export default function RealMapTibiaPrivateServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibia-private-server-germany" />;
}
