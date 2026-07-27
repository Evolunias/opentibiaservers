import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-old-school-review');
}

export default function Tibia14OldSchoolReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-old-school-review" />;
}
