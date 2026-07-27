import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-with-trainers-status');
}

export default function Tibia71WithTrainersStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-with-trainers-status" />;
}
