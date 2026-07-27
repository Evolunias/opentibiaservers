import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-status-sweden');
}

export default function NoResetStatusSwedenKeywordPage() {
  return <StaticKeywordPage slug="no-reset-status-sweden" />;
}
