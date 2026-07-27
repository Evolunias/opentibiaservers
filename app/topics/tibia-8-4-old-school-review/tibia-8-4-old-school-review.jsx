import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-old-school-review');
}

export default function Tibia84OldSchoolReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-old-school-review" />;
}
