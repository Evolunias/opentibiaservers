import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-with-reviews-server-north-america');
}

export default function DemolidoresWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-with-reviews-server-north-america" />;
}
