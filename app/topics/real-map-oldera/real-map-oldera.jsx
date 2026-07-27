import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-oldera');
}

export default function RealMapOlderaKeywordPage() {
  return <StaticKeywordPage slug="real-map-oldera" />;
}
