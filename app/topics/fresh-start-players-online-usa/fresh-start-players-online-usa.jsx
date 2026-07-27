import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-players-online-usa');
}

export default function FreshStartPlayersOnlineUsaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-players-online-usa" />;
}
