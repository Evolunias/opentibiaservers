import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-no-reset-register');
}

export default function Tibia11NoResetRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-no-reset-register" />;
}
