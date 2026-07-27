import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-with-trainers-register');
}

export default function Tibia84WithTrainersRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-with-trainers-register" />;
}
