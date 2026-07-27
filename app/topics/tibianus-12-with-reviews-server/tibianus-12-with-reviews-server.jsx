import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-12-with-reviews-server');
}

export default function Tibianus12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-12-with-reviews-server" />;
}
