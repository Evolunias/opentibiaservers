import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-trainers-register');
}

export default function Tibia14WithTrainersRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-trainers-register" />;
}
