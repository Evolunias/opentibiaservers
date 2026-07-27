import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-7-1-with-reviews-server');
}

export default function Unline71WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="unline-7-1-with-reviews-server" />;
}
