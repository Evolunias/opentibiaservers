import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-with-trainers-ot-server');
}

export default function Tibia84WithTrainersOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-with-trainers-ot-server" />;
}
