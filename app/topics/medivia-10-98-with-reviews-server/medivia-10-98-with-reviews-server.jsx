import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-10-98-with-reviews-server');
}

export default function Medivia1098WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-10-98-with-reviews-server" />;
}
