import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-cyntara-ot-server');
}

export default function RealMapCyntaraOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-cyntara-ot-server" />;
}
