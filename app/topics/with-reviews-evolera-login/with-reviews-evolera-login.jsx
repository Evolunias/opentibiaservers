import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-evolera-login');
}

export default function WithReviewsEvoleraLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-evolera-login" />;
}
