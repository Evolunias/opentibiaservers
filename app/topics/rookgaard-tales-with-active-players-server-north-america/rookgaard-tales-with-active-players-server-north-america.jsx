import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-with-active-players-server-north-america');
}

export default function RookgaardTalesWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-with-active-players-server-north-america" />;
}
