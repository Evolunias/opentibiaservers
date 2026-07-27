import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-trainers-register');
}

export default function Tibia12WithTrainersRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-trainers-register" />;
}
