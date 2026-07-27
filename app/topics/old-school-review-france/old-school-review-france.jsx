import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-review-france');
}

export default function OldSchoolReviewFranceKeywordPage() {
  return <StaticKeywordPage slug="old-school-review-france" />;
}
