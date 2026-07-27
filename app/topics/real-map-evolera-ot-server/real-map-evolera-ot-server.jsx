import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolera-ot-server');
}

export default function RealMapEvoleraOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolera-ot-server" />;
}
