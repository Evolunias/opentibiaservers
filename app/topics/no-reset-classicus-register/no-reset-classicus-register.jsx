import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-classicus-register');
}

export default function NoResetClassicusRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-classicus-register" />;
}
