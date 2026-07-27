import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-11-with-reviews-server');
}

export default function Luminera11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-11-with-reviews-server" />;
}
