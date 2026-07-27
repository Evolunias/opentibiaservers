import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-players-online-sweden');
}

export default function FreshStartPlayersOnlineSwedenKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-players-online-sweden" />;
}
