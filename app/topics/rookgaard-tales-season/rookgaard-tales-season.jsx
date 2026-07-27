import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-season');
}

export default function RookgaardTalesSeasonKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-season" />;
}
