import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-status-chile');
}

export default function EvoStatusChileKeywordPage() {
  return <StaticKeywordPage slug="evo-status-chile" />;
}
