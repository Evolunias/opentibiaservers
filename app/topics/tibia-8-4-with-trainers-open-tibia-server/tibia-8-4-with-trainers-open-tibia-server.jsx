import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-with-trainers-open-tibia-server');
}

export default function Tibia84WithTrainersOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-with-trainers-open-tibia-server" />;
}
