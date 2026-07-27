import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-rubinot-server');
}

export default function WithActivePlayersRubinotServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-rubinot-server" />;
}
