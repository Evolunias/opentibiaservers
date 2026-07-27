import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-with-trainers-servers');
}

export default function Tibia74WithTrainersServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-with-trainers-servers" />;
}
