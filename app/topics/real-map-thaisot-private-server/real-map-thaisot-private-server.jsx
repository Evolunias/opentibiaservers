import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thaisot-private-server');
}

export default function RealMapThaisotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-thaisot-private-server" />;
}
