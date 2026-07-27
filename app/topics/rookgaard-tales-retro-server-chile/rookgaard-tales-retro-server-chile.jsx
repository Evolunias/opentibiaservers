import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-retro-server-chile');
}

export default function RookgaardTalesRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-retro-server-chile" />;
}
