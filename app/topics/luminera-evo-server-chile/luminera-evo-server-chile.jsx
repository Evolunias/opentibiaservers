import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-evo-server-chile');
}

export default function LumineraEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="luminera-evo-server-chile" />;
}
