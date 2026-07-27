import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-trainers-open-tibia-server');
}

export default function Tibia13WithTrainersOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-trainers-open-tibia-server" />;
}
