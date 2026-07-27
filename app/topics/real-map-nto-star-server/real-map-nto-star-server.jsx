import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nto-star-server');
}

export default function RealMapNtoStarServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-nto-star-server" />;
}
