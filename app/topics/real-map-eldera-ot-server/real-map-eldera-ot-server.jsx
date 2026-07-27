import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-eldera-ot-server');
}

export default function RealMapElderaOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-eldera-ot-server" />;
}
