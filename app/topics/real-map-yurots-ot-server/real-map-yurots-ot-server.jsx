import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-yurots-ot-server');
}

export default function RealMapYurotsOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-yurots-ot-server" />;
}
