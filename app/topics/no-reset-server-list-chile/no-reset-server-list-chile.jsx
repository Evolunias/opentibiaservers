import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-server-list-chile');
}

export default function NoResetServerListChileKeywordPage() {
  return <StaticKeywordPage slug="no-reset-server-list-chile" />;
}
