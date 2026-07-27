import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-realesta-ot');
}

export default function WithReviewsRealestaOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-realesta-ot" />;
}
