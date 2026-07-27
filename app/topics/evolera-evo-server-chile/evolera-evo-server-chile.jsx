import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-evo-server-chile');
}

export default function EvoleraEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="evolera-evo-server-chile" />;
}
