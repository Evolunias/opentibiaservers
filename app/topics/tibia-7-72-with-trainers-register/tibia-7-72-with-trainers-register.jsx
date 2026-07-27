import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-with-trainers-register');
}

export default function Tibia772WithTrainersRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-with-trainers-register" />;
}
