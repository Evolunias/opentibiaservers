import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-10-98-with-reviews-server');
}

export default function Blazera1098WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-10-98-with-reviews-server" />;
}
