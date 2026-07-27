import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibijka-ot');
}

export default function RealMapTibijkaOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibijka-ot" />;
}
