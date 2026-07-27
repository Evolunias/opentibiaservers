import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-with-reviews-server-brazil');
}

export default function DemolidoresWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="demolidores-with-reviews-server-brazil" />;
}
