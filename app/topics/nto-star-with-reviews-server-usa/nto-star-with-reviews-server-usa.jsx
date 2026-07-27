import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-with-reviews-server-usa');
}

export default function NtoStarWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-with-reviews-server-usa" />;
}
