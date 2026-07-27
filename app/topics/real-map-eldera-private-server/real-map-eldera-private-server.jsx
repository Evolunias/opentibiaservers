import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-eldera-private-server');
}

export default function RealMapElderaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-eldera-private-server" />;
}
