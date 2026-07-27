import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-no-reset-server-chile');
}

export default function ElderaNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="eldera-no-reset-server-chile" />;
}
