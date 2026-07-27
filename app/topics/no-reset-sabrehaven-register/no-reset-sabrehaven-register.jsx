import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-sabrehaven-register');
}

export default function NoResetSabrehavenRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-sabrehaven-register" />;
}
