import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-custom-map-server-germany');
}

export default function NtoStarCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nto-star-custom-map-server-germany" />;
}
