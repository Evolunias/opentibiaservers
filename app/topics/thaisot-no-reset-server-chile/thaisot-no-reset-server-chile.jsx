import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-no-reset-server-chile');
}

export default function ThaisotNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="thaisot-no-reset-server-chile" />;
}
