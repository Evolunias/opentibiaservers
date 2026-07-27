import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-players-online');
}

export default function MidhemPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="midhem-players-online" />;
}
