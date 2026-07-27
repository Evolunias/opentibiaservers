import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-custom-map-server-latin-america');
}

export default function NtoStarCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-custom-map-server-latin-america" />;
}
