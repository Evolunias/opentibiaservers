import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-10-0-with-reviews-server');
}

export default function Tibijka100WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-10-0-with-reviews-server" />;
}
