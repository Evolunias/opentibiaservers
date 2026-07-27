import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-players-online');
}

export default function TibiaoriginsPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-players-online" />;
}
