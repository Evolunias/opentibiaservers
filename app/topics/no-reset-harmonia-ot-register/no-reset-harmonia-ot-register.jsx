import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-harmonia-ot-register');
}

export default function NoResetHarmoniaOtRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-harmonia-ot-register" />;
}
