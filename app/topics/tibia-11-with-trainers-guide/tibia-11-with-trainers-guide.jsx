import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-trainers-guide');
}

export default function Tibia11WithTrainersGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-trainers-guide" />;
}
