import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-custom-map-server-mexico');
}

export default function NtoStarCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="nto-star-custom-map-server-mexico" />;
}
