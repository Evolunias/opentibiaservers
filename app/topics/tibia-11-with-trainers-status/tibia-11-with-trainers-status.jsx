import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-trainers-status');
}

export default function Tibia11WithTrainersStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-trainers-status" />;
}
