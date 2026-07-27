import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-13-with-reviews-server');
}

export default function Tibianus13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-13-with-reviews-server" />;
}
