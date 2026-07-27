import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-client-chile');
}

export default function NoResetClientChileKeywordPage() {
  return <StaticKeywordPage slug="no-reset-client-chile" />;
}
