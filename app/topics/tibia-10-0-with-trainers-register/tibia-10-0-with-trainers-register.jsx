import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-with-trainers-register');
}

export default function Tibia100WithTrainersRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-with-trainers-register" />;
}
