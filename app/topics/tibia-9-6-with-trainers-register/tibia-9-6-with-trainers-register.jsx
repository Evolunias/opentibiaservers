import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-with-trainers-register');
}

export default function Tibia96WithTrainersRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-with-trainers-register" />;
}
