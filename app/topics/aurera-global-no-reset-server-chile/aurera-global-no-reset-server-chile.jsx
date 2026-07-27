import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-no-reset-server-chile');
}

export default function AureraGlobalNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-no-reset-server-chile" />;
}
