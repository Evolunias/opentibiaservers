import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-with-trainers-server');
}

export default function Tibia84WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-with-trainers-server" />;
}
