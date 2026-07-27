import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-no-reset-server-chile');
}

export default function OlderaNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="oldera-no-reset-server-chile" />;
}
