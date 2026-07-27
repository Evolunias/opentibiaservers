import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-trainers-review');
}

export default function Tibia15WithTrainersReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-trainers-review" />;
}
