import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-players-online-germany');
}

export default function FreshStartPlayersOnlineGermanyKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-players-online-germany" />;
}
