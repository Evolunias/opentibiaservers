import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-non-pvp-server-chile');
}

export default function RookgaardTalesNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-non-pvp-server-chile" />;
}
