import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-trainers-server');
}

export default function Tibia14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-trainers-server" />;
}
