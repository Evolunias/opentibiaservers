import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-oldera-servers');
}

export default function RealMapOlderaServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-oldera-servers" />;
}
