import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-trainers-server');
}

export default function Tibia12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-trainers-server" />;
}
