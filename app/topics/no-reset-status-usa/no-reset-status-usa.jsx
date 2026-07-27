import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-status-usa');
}

export default function NoResetStatusUsaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-status-usa" />;
}
