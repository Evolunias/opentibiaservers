import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-with-trainers-review');
}

export default function Tibia84WithTrainersReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-with-trainers-review" />;
}
