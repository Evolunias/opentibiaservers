import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-register-north-america');
}

export default function WithReviewsRegisterNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-register-north-america" />;
}
