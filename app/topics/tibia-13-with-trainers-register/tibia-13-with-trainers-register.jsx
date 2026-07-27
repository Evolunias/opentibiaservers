import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-trainers-register');
}

export default function Tibia13WithTrainersRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-trainers-register" />;
}
