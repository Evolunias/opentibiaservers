import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-15-with-active-players-server');
}

export default function Evolunia15WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-15-with-active-players-server" />;
}
