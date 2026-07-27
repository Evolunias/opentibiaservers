import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-review-south-america');
}

export default function OldSchoolReviewSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-review-south-america" />;
}
