import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-with-trainers-review');
}

export default function Tibia71WithTrainersReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-with-trainers-review" />;
}
