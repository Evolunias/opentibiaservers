import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-aurera-global-register');
}

export default function NoResetAureraGlobalRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-aurera-global-register" />;
}
