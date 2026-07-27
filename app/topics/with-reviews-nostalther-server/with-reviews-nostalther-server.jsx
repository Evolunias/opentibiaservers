import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nostalther-server');
}

export default function WithReviewsNostaltherServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nostalther-server" />;
}
