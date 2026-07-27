import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-players-online');
}

export default function TibijkaPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibijka-players-online" />;
}
