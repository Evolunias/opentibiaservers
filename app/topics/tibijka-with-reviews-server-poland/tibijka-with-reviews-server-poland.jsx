import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-reviews-server-poland');
}

export default function TibijkaWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-reviews-server-poland" />;
}
