import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-xanteria-server');
}

export default function WithActivePlayersXanteriaServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-xanteria-server" />;
}
