import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-15-with-active-players-server');
}

export default function Nostalther15WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-15-with-active-players-server" />;
}
