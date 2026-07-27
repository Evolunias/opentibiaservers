import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-with-trainers-status');
}

export default function Tibia96WithTrainersStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-with-trainers-status" />;
}
