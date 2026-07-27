import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-with-trainers-review');
}

export default function Tibia86WithTrainersReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-with-trainers-review" />;
}
