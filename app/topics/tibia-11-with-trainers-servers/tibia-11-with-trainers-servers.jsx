import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-trainers-servers');
}

export default function Tibia11WithTrainersServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-trainers-servers" />;
}
