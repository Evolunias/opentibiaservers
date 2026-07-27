import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-with-active-players-server-europe');
}

export default function RookgaardTalesWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-with-active-players-server-europe" />;
}
