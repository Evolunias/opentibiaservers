import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-review-germany');
}

export default function OldSchoolReviewGermanyKeywordPage() {
  return <StaticKeywordPage slug="old-school-review-germany" />;
}
