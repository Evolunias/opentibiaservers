import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-oldera-server');
}

export default function WithActivePlayersOlderaServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-oldera-server" />;
}
