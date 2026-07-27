import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-infernal-ot-register');
}

export default function NoResetInfernalOtRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-infernal-ot-register" />;
}
