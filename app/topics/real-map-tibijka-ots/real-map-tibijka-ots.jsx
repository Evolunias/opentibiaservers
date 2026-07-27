import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibijka-ots');
}

export default function RealMapTibijkaOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibijka-ots" />;
}
