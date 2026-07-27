import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-custom-map-servers-canada');
}

export default function NtoStarCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-custom-map-servers-canada" />;
}
