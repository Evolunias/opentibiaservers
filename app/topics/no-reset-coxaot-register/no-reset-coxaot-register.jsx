import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-coxaot-register');
}

export default function NoResetCoxaotRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-coxaot-register" />;
}
