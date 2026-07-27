import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-players-online-sweden');
}

export default function WithActivePlayersPlayersOnlineSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-players-online-sweden" />;
}
