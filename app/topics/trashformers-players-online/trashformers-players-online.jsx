import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-players-online');
}

export default function TrashformersPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="trashformers-players-online" />;
}
