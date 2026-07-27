import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-no-reset-server-chile');
}

export default function TibianusNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibianus-no-reset-server-chile" />;
}
