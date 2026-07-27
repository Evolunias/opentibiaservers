import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-with-trainers-servers');
}

export default function Tibia80WithTrainersServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-with-trainers-servers" />;
}
