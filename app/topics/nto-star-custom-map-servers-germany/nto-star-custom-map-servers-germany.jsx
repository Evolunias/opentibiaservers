import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-custom-map-servers-germany');
}

export default function NtoStarCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="nto-star-custom-map-servers-germany" />;
}
