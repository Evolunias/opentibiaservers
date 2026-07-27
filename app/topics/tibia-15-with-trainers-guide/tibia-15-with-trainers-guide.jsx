import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-trainers-guide');
}

export default function Tibia15WithTrainersGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-trainers-guide" />;
}
