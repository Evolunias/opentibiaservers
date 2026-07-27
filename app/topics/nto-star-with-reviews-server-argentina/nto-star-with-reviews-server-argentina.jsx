import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-with-reviews-server-argentina');
}

export default function NtoStarWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-with-reviews-server-argentina" />;
}
