import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-with-trainers-register');
}

export default function Tibia71WithTrainersRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-with-trainers-register" />;
}
