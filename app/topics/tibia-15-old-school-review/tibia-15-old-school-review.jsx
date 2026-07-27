import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-old-school-review');
}

export default function Tibia15OldSchoolReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-old-school-review" />;
}
