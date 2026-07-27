import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-trainers-server');
}

export default function Tibia15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-trainers-server" />;
}
