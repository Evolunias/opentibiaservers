import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-status-brazil');
}

export default function NoResetStatusBrazilKeywordPage() {
  return <StaticKeywordPage slug="no-reset-status-brazil" />;
}
