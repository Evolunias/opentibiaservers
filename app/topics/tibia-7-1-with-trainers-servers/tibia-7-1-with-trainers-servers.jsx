import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-with-trainers-servers');
}

export default function Tibia71WithTrainersServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-with-trainers-servers" />;
}
