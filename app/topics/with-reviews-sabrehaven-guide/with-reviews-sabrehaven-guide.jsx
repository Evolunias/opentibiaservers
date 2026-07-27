import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-sabrehaven-guide');
}

export default function WithReviewsSabrehavenGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-sabrehaven-guide" />;
}
