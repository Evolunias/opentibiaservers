import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-no-reset-server-chile');
}

export default function KasteriaNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="kasteria-no-reset-server-chile" />;
}
