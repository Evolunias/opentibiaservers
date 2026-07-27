import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nostalther-client');
}

export default function WithReviewsNostaltherClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nostalther-client" />;
}
