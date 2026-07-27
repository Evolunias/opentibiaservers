import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-players-online-europe');
}

export default function FreshStartPlayersOnlineEuropeKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-players-online-europe" />;
}
