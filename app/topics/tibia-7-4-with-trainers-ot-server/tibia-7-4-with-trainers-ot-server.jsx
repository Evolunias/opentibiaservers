import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-with-trainers-ot-server');
}

export default function Tibia74WithTrainersOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-with-trainers-ot-server" />;
}
