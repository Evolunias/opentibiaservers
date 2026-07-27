import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-coxaot-login');
}

export default function NoResetCoxaotLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-coxaot-login" />;
}
