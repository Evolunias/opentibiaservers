import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-status-chile');
}

export default function NoResetStatusChileKeywordPage() {
  return <StaticKeywordPage slug="no-reset-status-chile" />;
}
