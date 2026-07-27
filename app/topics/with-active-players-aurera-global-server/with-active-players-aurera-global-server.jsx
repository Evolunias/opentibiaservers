import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-aurera-global-server');
}

export default function WithActivePlayersAureraGlobalServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-aurera-global-server" />;
}
