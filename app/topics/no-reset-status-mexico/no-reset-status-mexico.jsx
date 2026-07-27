import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-status-mexico');
}

export default function NoResetStatusMexicoKeywordPage() {
  return <StaticKeywordPage slug="no-reset-status-mexico" />;
}
