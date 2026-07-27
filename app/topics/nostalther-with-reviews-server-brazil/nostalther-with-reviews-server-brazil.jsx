import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-reviews-server-brazil');
}

export default function NostaltherWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-reviews-server-brazil" />;
}
