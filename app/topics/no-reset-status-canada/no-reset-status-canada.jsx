import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-status-canada');
}

export default function NoResetStatusCanadaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-status-canada" />;
}
