import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-custom-map-servers-mexico');
}

export default function NtoStarCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="nto-star-custom-map-servers-mexico" />;
}
