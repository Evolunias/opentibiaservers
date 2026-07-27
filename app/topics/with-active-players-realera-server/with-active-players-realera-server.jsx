import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-realera-server');
}

export default function WithActivePlayersRealeraServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-realera-server" />;
}
