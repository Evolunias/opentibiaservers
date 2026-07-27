import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-custom-map-servers-argentina');
}

export default function NtoStarCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-custom-map-servers-argentina" />;
}
