import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-players-online');
}

export default function TibiantisPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-players-online" />;
}
