import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-trainers-review');
}

export default function Tibia11WithTrainersReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-trainers-review" />;
}
