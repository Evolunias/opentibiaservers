import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-custom-map-server-sweden');
}

export default function NtoStarCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nto-star-custom-map-server-sweden" />;
}
