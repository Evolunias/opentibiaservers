import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-yurots-server');
}

export default function WithActivePlayersYurotsServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-yurots-server" />;
}
