import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-old-school-review');
}

export default function Tibia74OldSchoolReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-old-school-review" />;
}
