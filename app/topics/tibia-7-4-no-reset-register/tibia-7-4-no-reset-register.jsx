import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-no-reset-register');
}

export default function Tibia74NoResetRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-no-reset-register" />;
}
