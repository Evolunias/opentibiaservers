import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-players-online');
}

export default function SabrehavenPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-players-online" />;
}
