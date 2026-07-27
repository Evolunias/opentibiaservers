import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-trainers-servers');
}

export default function Tibia12WithTrainersServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-trainers-servers" />;
}
