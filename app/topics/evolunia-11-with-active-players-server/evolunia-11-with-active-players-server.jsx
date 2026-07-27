import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-11-with-active-players-server');
}

export default function Evolunia11WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-11-with-active-players-server" />;
}
