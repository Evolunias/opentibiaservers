import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-15-with-reviews-server');
}

export default function Luminera15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-15-with-reviews-server" />;
}
