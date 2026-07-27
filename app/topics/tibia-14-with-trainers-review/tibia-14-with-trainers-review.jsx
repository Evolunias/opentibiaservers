import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-trainers-review');
}

export default function Tibia14WithTrainersReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-trainers-review" />;
}
