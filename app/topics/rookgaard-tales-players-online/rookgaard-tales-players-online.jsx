import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-players-online');
}

export default function RookgaardTalesPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-players-online" />;
}
