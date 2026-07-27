import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-reviews-server-europe');
}

export default function TibijkaWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-reviews-server-europe" />;
}
