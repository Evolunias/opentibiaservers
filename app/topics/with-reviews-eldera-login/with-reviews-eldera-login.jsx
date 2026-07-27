import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-eldera-login');
}

export default function WithReviewsElderaLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-eldera-login" />;
}
