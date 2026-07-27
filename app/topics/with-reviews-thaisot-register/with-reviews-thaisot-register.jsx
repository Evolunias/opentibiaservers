import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-thaisot-register');
}

export default function WithReviewsThaisotRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-thaisot-register" />;
}
