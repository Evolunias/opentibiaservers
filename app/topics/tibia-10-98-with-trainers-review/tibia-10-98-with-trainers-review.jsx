import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-with-trainers-review');
}

export default function Tibia1098WithTrainersReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-with-trainers-review" />;
}
