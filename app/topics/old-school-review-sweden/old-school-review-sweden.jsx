import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-review-sweden');
}

export default function OldSchoolReviewSwedenKeywordPage() {
  return <StaticKeywordPage slug="old-school-review-sweden" />;
}
