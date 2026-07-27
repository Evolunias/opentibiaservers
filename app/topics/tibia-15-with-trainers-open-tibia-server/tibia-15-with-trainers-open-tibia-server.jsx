import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-trainers-open-tibia-server');
}

export default function Tibia15WithTrainersOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-trainers-open-tibia-server" />;
}
