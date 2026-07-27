import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-1-with-reviews-server');
}

export default function Blazera71WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-1-with-reviews-server" />;
}
