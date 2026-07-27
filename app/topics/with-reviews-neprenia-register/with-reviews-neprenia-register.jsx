import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-neprenia-register');
}

export default function WithReviewsNepreniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-neprenia-register" />;
}
