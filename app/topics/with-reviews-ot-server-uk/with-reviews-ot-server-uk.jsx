import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ot-server-uk');
}

export default function WithReviewsOtServerUkKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ot-server-uk" />;
}
