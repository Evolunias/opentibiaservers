import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-players-online-north-america');
}

export default function FreshStartPlayersOnlineNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-players-online-north-america" />;
}
