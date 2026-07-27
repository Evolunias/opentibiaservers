import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-custom-map-server-poland');
}

export default function NtoStarCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nto-star-custom-map-server-poland" />;
}
