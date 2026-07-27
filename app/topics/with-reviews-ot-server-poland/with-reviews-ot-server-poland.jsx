import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ot-server-poland');
}

export default function WithReviewsOtServerPolandKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ot-server-poland" />;
}
