import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-kasteria-server');
}

export default function WithActivePlayersKasteriaServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-kasteria-server" />;
}
