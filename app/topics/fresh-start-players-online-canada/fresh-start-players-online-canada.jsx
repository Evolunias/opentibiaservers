import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-players-online-canada');
}

export default function FreshStartPlayersOnlineCanadaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-players-online-canada" />;
}
