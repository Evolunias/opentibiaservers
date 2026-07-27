import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-trainers-guide');
}

export default function Tibia13WithTrainersGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-trainers-guide" />;
}
