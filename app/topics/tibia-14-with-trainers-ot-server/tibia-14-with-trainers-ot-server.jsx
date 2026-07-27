import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-trainers-ot-server');
}

export default function Tibia14WithTrainersOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-trainers-ot-server" />;
}
