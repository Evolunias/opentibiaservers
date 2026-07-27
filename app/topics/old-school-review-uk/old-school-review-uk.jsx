import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-review-uk');
}

export default function OldSchoolReviewUkKeywordPage() {
  return <StaticKeywordPage slug="old-school-review-uk" />;
}
