import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-old-school-review');
}

export default function Tibia12OldSchoolReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-old-school-review" />;
}
