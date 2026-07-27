import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-oldera-ot');
}

export default function RealMapOlderaOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-oldera-ot" />;
}
