import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-0-with-reviews-server');
}

export default function Medivia80WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-0-with-reviews-server" />;
}
