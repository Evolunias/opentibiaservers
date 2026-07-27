import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-old-school-review');
}

export default function Tibia13OldSchoolReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-old-school-review" />;
}
