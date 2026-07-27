import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-sabrehaven-private-server');
}

export default function RealMapSabrehavenPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-sabrehaven-private-server" />;
}
