import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-trainers-ot-server');
}

export default function Tibia11WithTrainersOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-trainers-ot-server" />;
}
