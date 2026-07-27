import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-evo-server-chile');
}

export default function InfernalOtEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-evo-server-chile" />;
}
