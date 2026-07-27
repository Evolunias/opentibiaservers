import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-1-with-reviews-server');
}

export default function Luminera71WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-1-with-reviews-server" />;
}
