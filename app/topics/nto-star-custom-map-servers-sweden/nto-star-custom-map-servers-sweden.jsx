import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-custom-map-servers-sweden');
}

export default function NtoStarCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="nto-star-custom-map-servers-sweden" />;
}
