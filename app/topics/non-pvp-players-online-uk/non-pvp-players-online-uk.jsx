import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-players-online-uk');
}

export default function NonPvpPlayersOnlineUkKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-players-online-uk" />;
}
