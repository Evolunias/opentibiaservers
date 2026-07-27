import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibianus-register');
}

export default function NoResetTibianusRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibianus-register" />;
}
