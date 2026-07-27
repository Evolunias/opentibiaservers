import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-no-reset-server-chile');
}

export default function UnlineNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="unline-no-reset-server-chile" />;
}
