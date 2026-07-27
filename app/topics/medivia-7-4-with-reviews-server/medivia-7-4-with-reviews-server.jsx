import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-4-with-reviews-server');
}

export default function Medivia74WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-4-with-reviews-server" />;
}
