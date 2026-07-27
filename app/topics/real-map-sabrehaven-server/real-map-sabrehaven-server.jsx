import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-sabrehaven-server');
}

export default function RealMapSabrehavenServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-sabrehaven-server" />;
}
