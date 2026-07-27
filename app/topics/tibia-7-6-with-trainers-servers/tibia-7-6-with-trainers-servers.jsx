import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-with-trainers-servers');
}

export default function Tibia76WithTrainersServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-with-trainers-servers" />;
}
