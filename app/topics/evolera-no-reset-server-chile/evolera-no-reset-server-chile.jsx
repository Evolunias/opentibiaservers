import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-no-reset-server-chile');
}

export default function EvoleraNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="evolera-no-reset-server-chile" />;
}
