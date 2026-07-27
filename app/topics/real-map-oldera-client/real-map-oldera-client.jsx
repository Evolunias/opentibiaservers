import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-oldera-client');
}

export default function RealMapOlderaClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-oldera-client" />;
}
