import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-review-latin-america');
}

export default function OldSchoolReviewLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-review-latin-america" />;
}
