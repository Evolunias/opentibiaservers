import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-nto-star-servers');
}

export default function CustomMapNtoStarServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-nto-star-servers" />;
}
