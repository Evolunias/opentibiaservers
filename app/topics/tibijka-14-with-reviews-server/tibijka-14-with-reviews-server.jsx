import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-14-with-reviews-server');
}

export default function Tibijka14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-14-with-reviews-server" />;
}
