import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-with-reviews-server-chile');
}

export default function DemolidoresWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="demolidores-with-reviews-server-chile" />;
}
