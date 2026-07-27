import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-custom-map-server-canada');
}

export default function NtoStarCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-custom-map-server-canada" />;
}
