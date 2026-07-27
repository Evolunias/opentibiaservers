import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-carlinot-server');
}

export default function WithActivePlayersCarlinotServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-carlinot-server" />;
}
