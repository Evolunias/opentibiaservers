import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-evo-server-chile');
}

export default function EvoluniaEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="evolunia-evo-server-chile" />;
}
