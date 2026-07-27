import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-trainers-server');
}

export default function Tibia11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-trainers-server" />;
}
