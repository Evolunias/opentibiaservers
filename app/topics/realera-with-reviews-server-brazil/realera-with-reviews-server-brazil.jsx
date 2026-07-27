import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-reviews-server-brazil');
}

export default function RealeraWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="realera-with-reviews-server-brazil" />;
}
