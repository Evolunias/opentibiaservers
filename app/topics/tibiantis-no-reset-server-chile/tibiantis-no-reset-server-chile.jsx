import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-no-reset-server-chile');
}

export default function TibiantisNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-no-reset-server-chile" />;
}
