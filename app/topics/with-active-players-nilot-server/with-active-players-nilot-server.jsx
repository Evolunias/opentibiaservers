import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-nilot-server');
}

export default function WithActivePlayersNilotServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-nilot-server" />;
}
