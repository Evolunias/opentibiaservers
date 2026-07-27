import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-no-reset-register');
}

export default function Tibia96NoResetRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-no-reset-register" />;
}
