import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-10-0-with-reviews-server');
}

export default function Tibianus100WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-10-0-with-reviews-server" />;
}
