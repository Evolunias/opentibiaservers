import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-review-north-america');
}

export default function OldSchoolReviewNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-review-north-america" />;
}
