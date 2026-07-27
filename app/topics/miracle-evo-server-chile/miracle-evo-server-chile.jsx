import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-evo-server-chile');
}

export default function MiracleEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="miracle-evo-server-chile" />;
}
