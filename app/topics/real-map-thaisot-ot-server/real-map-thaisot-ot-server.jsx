import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thaisot-ot-server');
}

export default function RealMapThaisotOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-thaisot-ot-server" />;
}
