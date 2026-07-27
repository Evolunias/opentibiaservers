import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-reviews-server-brazil');
}

export default function RealestaWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-reviews-server-brazil" />;
}
