import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-custom-map-servers-south-america');
}

export default function NtoStarCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-custom-map-servers-south-america" />;
}
