import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thornia-ot-server');
}

export default function RealMapThorniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-thornia-ot-server" />;
}
