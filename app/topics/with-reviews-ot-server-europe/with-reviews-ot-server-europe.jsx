import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ot-server-europe');
}

export default function WithReviewsOtServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ot-server-europe" />;
}
