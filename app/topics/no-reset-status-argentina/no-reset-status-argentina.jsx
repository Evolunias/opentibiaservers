import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-status-argentina');
}

export default function NoResetStatusArgentinaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-status-argentina" />;
}
