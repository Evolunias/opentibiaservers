import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-trainers-servers');
}

export default function Tibia14WithTrainersServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-trainers-servers" />;
}
