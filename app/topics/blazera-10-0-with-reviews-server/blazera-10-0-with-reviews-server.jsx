import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-10-0-with-reviews-server');
}

export default function Blazera100WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-10-0-with-reviews-server" />;
}
