import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-trainers-open-tibia-server');
}

export default function Tibia14WithTrainersOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-trainers-open-tibia-server" />;
}
