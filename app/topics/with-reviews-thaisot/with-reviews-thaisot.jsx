import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-thaisot');
}

export default function WithReviewsThaisotKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-thaisot" />;
}
