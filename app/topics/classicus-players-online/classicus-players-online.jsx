import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-players-online');
}

export default function ClassicusPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="classicus-players-online" />;
}
