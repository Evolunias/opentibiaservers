import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-xanteria-ot-server');
}

export default function RealMapXanteriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-xanteria-ot-server" />;
}
