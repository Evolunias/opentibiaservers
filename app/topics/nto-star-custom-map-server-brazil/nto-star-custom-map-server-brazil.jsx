import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-custom-map-server-brazil');
}

export default function NtoStarCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nto-star-custom-map-server-brazil" />;
}
