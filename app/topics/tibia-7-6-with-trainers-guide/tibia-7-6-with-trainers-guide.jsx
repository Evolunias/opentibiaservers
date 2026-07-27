import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-with-trainers-guide');
}

export default function Tibia76WithTrainersGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-with-trainers-guide" />;
}
