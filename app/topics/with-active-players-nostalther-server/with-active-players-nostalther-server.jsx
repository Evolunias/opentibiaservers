import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-nostalther-server');
}

export default function WithActivePlayersNostaltherServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-nostalther-server" />;
}
