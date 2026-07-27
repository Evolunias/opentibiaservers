import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-with-trainers-ot-server');
}

export default function Tibia100WithTrainersOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-with-trainers-ot-server" />;
}
