import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-evolera');
}

export default function WithReviewsEvoleraKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-evolera" />;
}
