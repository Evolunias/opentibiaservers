import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-no-reset-register');
}

export default function Tibia12NoResetRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-no-reset-register" />;
}
