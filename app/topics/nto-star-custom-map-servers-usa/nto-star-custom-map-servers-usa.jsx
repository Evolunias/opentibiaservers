import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-custom-map-servers-usa');
}

export default function NtoStarCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-custom-map-servers-usa" />;
}
