import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-players-online-uk');
}

export default function FreshStartPlayersOnlineUkKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-players-online-uk" />;
}
