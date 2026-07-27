import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-medivia-private-server');
}

export default function RealMapMediviaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-medivia-private-server" />;
}
