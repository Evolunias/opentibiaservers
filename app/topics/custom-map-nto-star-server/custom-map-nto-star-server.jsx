import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-nto-star-server');
}

export default function CustomMapNtoStarServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-nto-star-server" />;
}
