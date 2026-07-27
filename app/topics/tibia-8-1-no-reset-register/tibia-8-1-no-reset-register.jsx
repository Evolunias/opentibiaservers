import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-no-reset-register');
}

export default function Tibia81NoResetRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-no-reset-register" />;
}
