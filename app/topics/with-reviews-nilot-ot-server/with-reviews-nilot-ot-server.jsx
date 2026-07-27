import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nilot-ot-server');
}

export default function WithReviewsNilotOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nilot-ot-server" />;
}
