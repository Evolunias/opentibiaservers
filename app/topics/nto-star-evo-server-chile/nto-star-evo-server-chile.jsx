import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-evo-server-chile');
}

export default function NtoStarEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="nto-star-evo-server-chile" />;
}
