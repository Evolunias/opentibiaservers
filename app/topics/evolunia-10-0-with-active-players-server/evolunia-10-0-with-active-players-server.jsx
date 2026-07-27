import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-10-0-with-active-players-server');
}

export default function Evolunia100WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-10-0-with-active-players-server" />;
}
