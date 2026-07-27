import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-no-reset-server-chile');
}

export default function ClassicusNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="classicus-no-reset-server-chile" />;
}
