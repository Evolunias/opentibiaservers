import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-with-reviews-server-brazil');
}

export default function NtoStarWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nto-star-with-reviews-server-brazil" />;
}
