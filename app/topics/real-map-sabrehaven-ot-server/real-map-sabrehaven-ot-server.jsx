import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-sabrehaven-ot-server');
}

export default function RealMapSabrehavenOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-sabrehaven-ot-server" />;
}
