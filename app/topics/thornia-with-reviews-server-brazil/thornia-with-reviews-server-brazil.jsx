import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-reviews-server-brazil');
}

export default function ThorniaWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-reviews-server-brazil" />;
}
