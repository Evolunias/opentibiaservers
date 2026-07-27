import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-pvp-server-chile');
}

export default function RookgaardTalesPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-pvp-server-chile" />;
}
