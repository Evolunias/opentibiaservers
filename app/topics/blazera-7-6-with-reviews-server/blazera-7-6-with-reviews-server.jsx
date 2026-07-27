import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-6-with-reviews-server');
}

export default function Blazera76WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-6-with-reviews-server" />;
}
