import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-with-trainers-guide');
}

export default function Tibia96WithTrainersGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-with-trainers-guide" />;
}
