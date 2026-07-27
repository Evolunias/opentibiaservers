import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-with-trainers-ot-server');
}

export default function Tibia71WithTrainersOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-with-trainers-ot-server" />;
}
