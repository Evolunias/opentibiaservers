import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-classicus');
}

export default function WithReviewsClassicusKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-classicus" />;
}
