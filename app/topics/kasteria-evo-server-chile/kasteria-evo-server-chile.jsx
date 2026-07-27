import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-evo-server-chile');
}

export default function KasteriaEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="kasteria-evo-server-chile" />;
}
