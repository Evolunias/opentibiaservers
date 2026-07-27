import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-with-trainers-review');
}

export default function Tibia96WithTrainersReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-with-trainers-review" />;
}
