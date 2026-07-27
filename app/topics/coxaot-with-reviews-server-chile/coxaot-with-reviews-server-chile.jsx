import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-reviews-server-chile');
}

export default function CoxaotWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-reviews-server-chile" />;
}
