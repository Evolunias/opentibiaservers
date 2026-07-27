import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nto-star-private-server');
}

export default function RealMapNtoStarPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-nto-star-private-server" />;
}
