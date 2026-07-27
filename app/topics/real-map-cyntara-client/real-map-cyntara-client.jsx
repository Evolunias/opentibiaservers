import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-cyntara-client');
}

export default function RealMapCyntaraClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-cyntara-client" />;
}
