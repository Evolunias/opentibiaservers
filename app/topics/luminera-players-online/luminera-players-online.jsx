import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-players-online');
}

export default function LumineraPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="luminera-players-online" />;
}
