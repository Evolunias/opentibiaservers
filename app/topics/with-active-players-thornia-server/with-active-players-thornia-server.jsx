import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-thornia-server');
}

export default function WithActivePlayersThorniaServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-thornia-server" />;
}
