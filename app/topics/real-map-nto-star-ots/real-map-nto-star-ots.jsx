import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nto-star-ots');
}

export default function RealMapNtoStarOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-nto-star-ots" />;
}
