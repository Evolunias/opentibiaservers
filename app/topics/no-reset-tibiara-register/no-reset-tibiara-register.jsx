import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiara-register');
}

export default function NoResetTibiaraRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiara-register" />;
}
