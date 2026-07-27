import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-no-reset-server-chile');
}

export default function RealestaNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="realesta-no-reset-server-chile" />;
}
