import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibia-private-server-poland');
}

export default function RealMapTibiaPrivateServerPolandKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibia-private-server-poland" />;
}
