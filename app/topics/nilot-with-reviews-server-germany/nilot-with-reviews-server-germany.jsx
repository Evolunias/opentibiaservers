import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-reviews-server-germany');
}

export default function NilotWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-reviews-server-germany" />;
}
