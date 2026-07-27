import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-11-with-reviews-server');
}

export default function Unline11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="unline-11-with-reviews-server" />;
}
