import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-no-reset-register');
}

export default function Tibia15NoResetRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-no-reset-register" />;
}
