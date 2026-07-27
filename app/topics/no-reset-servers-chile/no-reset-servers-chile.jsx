import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-servers-chile');
}

export default function NoResetServersChileKeywordPage() {
  return <StaticKeywordPage slug="no-reset-servers-chile" />;
}
