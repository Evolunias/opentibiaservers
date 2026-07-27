import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-unline-ot-server');
}

export default function RealMapUnlineOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-unline-ot-server" />;
}
