import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-custom-map-server-usa');
}

export default function NtoStarCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-custom-map-server-usa" />;
}
