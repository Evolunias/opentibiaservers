import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nilot-ot');
}

export default function WithReviewsNilotOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nilot-ot" />;
}
