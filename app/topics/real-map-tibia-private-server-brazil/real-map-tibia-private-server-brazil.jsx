import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibia-private-server-brazil');
}

export default function RealMapTibiaPrivateServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibia-private-server-brazil" />;
}
