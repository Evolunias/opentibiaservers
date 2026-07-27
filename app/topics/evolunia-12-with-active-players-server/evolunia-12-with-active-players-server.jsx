import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-12-with-active-players-server');
}

export default function Evolunia12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-12-with-active-players-server" />;
}
