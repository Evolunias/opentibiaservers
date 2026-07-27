import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-evo-server-chile');
}

export default function AureraGlobalEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-evo-server-chile" />;
}
