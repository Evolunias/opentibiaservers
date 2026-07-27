import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-with-trainers-servers');
}

export default function Tibia81WithTrainersServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-with-trainers-servers" />;
}
