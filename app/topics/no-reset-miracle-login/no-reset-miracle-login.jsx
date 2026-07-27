import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-miracle-login');
}

export default function NoResetMiracleLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-miracle-login" />;
}
