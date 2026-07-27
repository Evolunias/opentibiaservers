import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-pvpe-server-chile');
}

export default function RookgaardTalesPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-pvpe-server-chile" />;
}
