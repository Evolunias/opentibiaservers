import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-medivia-register');
}

export default function NoResetMediviaRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-medivia-register" />;
}
