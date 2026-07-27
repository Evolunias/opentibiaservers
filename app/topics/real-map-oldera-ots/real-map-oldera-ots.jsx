import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-oldera-ots');
}

export default function RealMapOlderaOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-oldera-ots" />;
}
