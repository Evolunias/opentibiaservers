import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-trainers-open-tibia-server');
}

export default function Tibia11WithTrainersOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-trainers-open-tibia-server" />;
}
