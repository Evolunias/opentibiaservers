import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-review-poland');
}

export default function OldSchoolReviewPolandKeywordPage() {
  return <StaticKeywordPage slug="old-school-review-poland" />;
}
