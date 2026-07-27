import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-old-school-review');
}

export default function Tibia854OldSchoolReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-old-school-review" />;
}
