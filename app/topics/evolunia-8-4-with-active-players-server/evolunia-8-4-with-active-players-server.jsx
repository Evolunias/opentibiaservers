import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-4-with-active-players-server');
}

export default function Evolunia84WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-4-with-active-players-server" />;
}
