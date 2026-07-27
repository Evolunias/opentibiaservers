import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-custom-map-server-south-america');
}

export default function NtoStarCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-custom-map-server-south-america" />;
}
