import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ameria-ots');
}

export default function RealMapAmeriaOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-ameria-ots" />;
}
