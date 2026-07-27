import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-cyntara-servers');
}

export default function RealMapCyntaraServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-cyntara-servers" />;
}
