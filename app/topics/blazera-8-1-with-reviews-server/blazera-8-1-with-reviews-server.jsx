import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-1-with-reviews-server');
}

export default function Blazera81WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-1-with-reviews-server" />;
}
