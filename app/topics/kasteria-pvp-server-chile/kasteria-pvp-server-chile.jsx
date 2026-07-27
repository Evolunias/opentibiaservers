import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-pvp-server-chile');
}

export default function KasteriaPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="kasteria-pvp-server-chile" />;
}
