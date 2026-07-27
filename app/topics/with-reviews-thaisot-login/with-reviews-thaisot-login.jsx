import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-thaisot-login');
}

export default function WithReviewsThaisotLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-thaisot-login" />;
}
