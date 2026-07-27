import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-with-reviews-server-brazil');
}

export default function ImperianicWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="imperianic-with-reviews-server-brazil" />;
}
