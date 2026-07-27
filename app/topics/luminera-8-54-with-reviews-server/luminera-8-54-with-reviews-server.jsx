import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-54-with-reviews-server');
}

export default function Luminera854WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-54-with-reviews-server" />;
}
