import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-review-brazil');
}

export default function OldSchoolReviewBrazilKeywordPage() {
  return <StaticKeywordPage slug="old-school-review-brazil" />;
}
