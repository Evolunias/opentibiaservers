import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-carlinot-private-server');
}

export default function RealMapCarlinotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-carlinot-private-server" />;
}
