import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-no-reset-register');
}

export default function Tibia13NoResetRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-no-reset-register" />;
}
