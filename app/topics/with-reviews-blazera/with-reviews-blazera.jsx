import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-blazera');
}

export default function WithReviewsBlazeraKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-blazera" />;
}
