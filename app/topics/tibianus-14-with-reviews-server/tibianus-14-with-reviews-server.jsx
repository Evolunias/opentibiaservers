import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-14-with-reviews-server');
}

export default function Tibianus14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-14-with-reviews-server" />;
}
