import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-fresh-start-server-chile');
}

export default function RookgaardTalesFreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-fresh-start-server-chile" />;
}
