import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-13-with-active-players-server');
}

export default function Evolunia13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-13-with-active-players-server" />;
}
