import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-players-online-argentina');
}

export default function FreshStartPlayersOnlineArgentinaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-players-online-argentina" />;
}
