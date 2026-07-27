import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibianus');
}

export default function RealMapTibianusKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibianus" />;
}
