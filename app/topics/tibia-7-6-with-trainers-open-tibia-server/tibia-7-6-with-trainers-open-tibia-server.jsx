import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-with-trainers-open-tibia-server');
}

export default function Tibia76WithTrainersOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-with-trainers-open-tibia-server" />;
}
