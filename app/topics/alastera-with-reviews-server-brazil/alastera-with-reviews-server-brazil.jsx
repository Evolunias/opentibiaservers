import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-reviews-server-brazil');
}

export default function AlasteraWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-reviews-server-brazil" />;
}
