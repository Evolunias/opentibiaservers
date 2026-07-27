import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-aurera-global-login');
}

export default function NoResetAureraGlobalLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-aurera-global-login" />;
}
