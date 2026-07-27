import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-with-trainers-status');
}

export default function Tibia80WithTrainersStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-with-trainers-status" />;
}
