import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-evo-server-chile');
}

export default function ArcaniarlEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-evo-server-chile" />;
}
