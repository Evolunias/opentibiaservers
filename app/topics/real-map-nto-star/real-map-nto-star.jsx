import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nto-star');
}

export default function RealMapNtoStarKeywordPage() {
  return <StaticKeywordPage slug="real-map-nto-star" />;
}
