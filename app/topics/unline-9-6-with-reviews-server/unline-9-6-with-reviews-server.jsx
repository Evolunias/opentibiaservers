import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-9-6-with-reviews-server');
}

export default function Unline96WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="unline-9-6-with-reviews-server" />;
}
