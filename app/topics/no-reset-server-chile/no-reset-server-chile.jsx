import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-server-chile');
}

export default function NoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="no-reset-server-chile" />;
}
