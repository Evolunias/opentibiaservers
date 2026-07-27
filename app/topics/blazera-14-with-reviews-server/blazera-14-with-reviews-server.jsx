import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-14-with-reviews-server');
}

export default function Blazera14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-14-with-reviews-server" />;
}
