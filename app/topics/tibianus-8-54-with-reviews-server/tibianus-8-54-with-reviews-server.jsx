import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-54-with-reviews-server');
}

export default function Tibianus854WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-54-with-reviews-server" />;
}
