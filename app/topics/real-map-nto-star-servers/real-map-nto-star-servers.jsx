import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nto-star-servers');
}

export default function RealMapNtoStarServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-nto-star-servers" />;
}
