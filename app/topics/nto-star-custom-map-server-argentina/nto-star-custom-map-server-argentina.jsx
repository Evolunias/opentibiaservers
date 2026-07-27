import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-custom-map-server-argentina');
}

export default function NtoStarCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-custom-map-server-argentina" />;
}
