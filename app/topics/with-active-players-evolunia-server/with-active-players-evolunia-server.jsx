import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-evolunia-server');
}

export default function WithActivePlayersEvoluniaServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-evolunia-server" />;
}
