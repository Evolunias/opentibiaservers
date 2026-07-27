import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-14-with-active-players-server');
}

export default function Evolunia14WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-14-with-active-players-server" />;
}
