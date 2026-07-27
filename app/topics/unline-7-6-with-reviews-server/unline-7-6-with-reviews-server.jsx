import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-7-6-with-reviews-server');
}

export default function Unline76WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="unline-7-6-with-reviews-server" />;
}
