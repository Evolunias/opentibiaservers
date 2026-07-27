import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-infernal-ot-login');
}

export default function NoResetInfernalOtLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-infernal-ot-login" />;
}
