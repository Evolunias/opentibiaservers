import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-review-usa');
}

export default function OldSchoolReviewUsaKeywordPage() {
  return <StaticKeywordPage slug="old-school-review-usa" />;
}
