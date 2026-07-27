import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-cyntara-server');
}

export default function RealMapCyntaraServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-cyntara-server" />;
}
