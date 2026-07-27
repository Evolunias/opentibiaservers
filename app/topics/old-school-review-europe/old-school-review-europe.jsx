import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-review-europe');
}

export default function OldSchoolReviewEuropeKeywordPage() {
  return <StaticKeywordPage slug="old-school-review-europe" />;
}
