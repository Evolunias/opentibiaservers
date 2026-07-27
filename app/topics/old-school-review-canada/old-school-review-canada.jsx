import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-review-canada');
}

export default function OldSchoolReviewCanadaKeywordPage() {
  return <StaticKeywordPage slug="old-school-review-canada" />;
}
