import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-old-school-review');
}

export default function Tibia80OldSchoolReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-old-school-review" />;
}
