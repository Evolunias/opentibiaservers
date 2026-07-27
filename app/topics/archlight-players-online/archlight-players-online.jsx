import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-players-online');
}

export default function ArchlightPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="archlight-players-online" />;
}
