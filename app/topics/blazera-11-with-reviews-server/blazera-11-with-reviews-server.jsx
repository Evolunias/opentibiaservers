import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-11-with-reviews-server');
}

export default function Blazera11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-11-with-reviews-server" />;
}
