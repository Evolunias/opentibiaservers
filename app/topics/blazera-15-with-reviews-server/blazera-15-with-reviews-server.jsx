import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-15-with-reviews-server');
}

export default function Blazera15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-15-with-reviews-server" />;
}
