import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-no-reset-server-chile');
}

export default function TibiameNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiame-no-reset-server-chile" />;
}
