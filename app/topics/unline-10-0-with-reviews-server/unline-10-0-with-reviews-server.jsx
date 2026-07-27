import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-10-0-with-reviews-server');
}

export default function Unline100WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="unline-10-0-with-reviews-server" />;
}
