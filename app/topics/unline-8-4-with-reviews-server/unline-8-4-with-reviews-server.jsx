import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-8-4-with-reviews-server');
}

export default function Unline84WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="unline-8-4-with-reviews-server" />;
}
