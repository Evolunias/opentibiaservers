import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-trainers-register');
}

export default function Tibia11WithTrainersRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-trainers-register" />;
}
