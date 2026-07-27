import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-blazera-login');
}

export default function WithReviewsBlazeraLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-blazera-login" />;
}
