import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-evo-server-chile');
}

export default function RookgaardTalesEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-evo-server-chile" />;
}
