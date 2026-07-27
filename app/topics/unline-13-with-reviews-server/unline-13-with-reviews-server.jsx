import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-13-with-reviews-server');
}

export default function Unline13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="unline-13-with-reviews-server" />;
}
