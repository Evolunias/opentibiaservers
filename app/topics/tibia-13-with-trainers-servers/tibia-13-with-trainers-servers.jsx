import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-trainers-servers');
}

export default function Tibia13WithTrainersServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-trainers-servers" />;
}
