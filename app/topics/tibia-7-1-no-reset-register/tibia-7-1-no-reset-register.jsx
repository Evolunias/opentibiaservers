import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-no-reset-register');
}

export default function Tibia71NoResetRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-no-reset-register" />;
}
