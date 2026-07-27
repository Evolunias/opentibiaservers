import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-no-reset-register');
}

export default function Tibia14NoResetRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-no-reset-register" />;
}
