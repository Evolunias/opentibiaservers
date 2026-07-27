import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ameria-ot-server');
}

export default function RealMapAmeriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-ameria-ot-server" />;
}
