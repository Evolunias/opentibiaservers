import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-with-trainers-register');
}

export default function Tibia1098WithTrainersRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-with-trainers-register" />;
}
