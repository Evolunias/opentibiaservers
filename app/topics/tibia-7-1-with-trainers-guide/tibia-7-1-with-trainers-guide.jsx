import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-with-trainers-guide');
}

export default function Tibia71WithTrainersGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-with-trainers-guide" />;
}
