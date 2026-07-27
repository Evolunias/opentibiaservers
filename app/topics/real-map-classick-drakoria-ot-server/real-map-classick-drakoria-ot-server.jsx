import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-classick-drakoria-ot-server');
}

export default function RealMapClassickDrakoriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-classick-drakoria-ot-server" />;
}
