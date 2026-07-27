import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-players-online-poland');
}

export default function FreshStartPlayersOnlinePolandKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-players-online-poland" />;
}
