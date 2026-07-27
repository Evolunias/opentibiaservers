import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-demolidores-ot-server');
}

export default function RealMapDemolidoresOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-demolidores-ot-server" />;
}
