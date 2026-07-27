import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-custom-map-server-north-america');
}

export default function NtoStarCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-custom-map-server-north-america" />;
}
