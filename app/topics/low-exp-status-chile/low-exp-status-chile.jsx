import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-status-chile');
}

export default function LowExpStatusChileKeywordPage() {
  return <StaticKeywordPage slug="low-exp-status-chile" />;
}
