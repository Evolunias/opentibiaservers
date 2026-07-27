import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-old-school-review');
}

export default function Tibia11OldSchoolReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-old-school-review" />;
}
