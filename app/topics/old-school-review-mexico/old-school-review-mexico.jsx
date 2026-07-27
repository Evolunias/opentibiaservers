import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-review-mexico');
}

export default function OldSchoolReviewMexicoKeywordPage() {
  return <StaticKeywordPage slug="old-school-review-mexico" />;
}
