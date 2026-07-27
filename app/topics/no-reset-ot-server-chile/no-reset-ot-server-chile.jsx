import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ot-server-chile');
}

export default function NoResetOtServerChileKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ot-server-chile" />;
}
