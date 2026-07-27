import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ameria');
}

export default function RealMapAmeriaKeywordPage() {
  return <StaticKeywordPage slug="real-map-ameria" />;
}
