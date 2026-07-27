import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-carlinot-ot-server');
}

export default function RealMapCarlinotOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-carlinot-ot-server" />;
}
