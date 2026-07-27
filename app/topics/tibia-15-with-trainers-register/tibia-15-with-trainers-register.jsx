import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-trainers-register');
}

export default function Tibia15WithTrainersRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-trainers-register" />;
}
