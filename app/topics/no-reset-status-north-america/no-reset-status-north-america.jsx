import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-status-north-america');
}

export default function NoResetStatusNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-status-north-america" />;
}
