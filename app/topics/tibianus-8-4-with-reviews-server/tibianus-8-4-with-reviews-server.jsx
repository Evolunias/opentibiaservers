import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-4-with-reviews-server');
}

export default function Tibianus84WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-4-with-reviews-server" />;
}
