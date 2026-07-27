import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ot-server-canada');
}

export default function RealMapOtServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="real-map-ot-server-canada" />;
}
