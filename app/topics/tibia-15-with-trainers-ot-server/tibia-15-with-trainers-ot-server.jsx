import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-trainers-ot-server');
}

export default function Tibia15WithTrainersOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-trainers-ot-server" />;
}
