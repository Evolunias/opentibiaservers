import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-players-online');
}

export default function TibiascapePlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-players-online" />;
}
