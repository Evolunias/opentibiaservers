import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-review-chile');
}

export default function OldSchoolReviewChileKeywordPage() {
  return <StaticKeywordPage slug="old-school-review-chile" />;
}
