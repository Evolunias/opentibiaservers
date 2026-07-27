import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-evo-server-chile');
}

export default function NoxiousotEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-evo-server-chile" />;
}
