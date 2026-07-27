import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-status-south-america');
}

export default function NoResetStatusSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-status-south-america" />;
}
