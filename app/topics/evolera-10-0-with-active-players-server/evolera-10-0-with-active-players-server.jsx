import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-10-0-with-active-players-server');
}

export default function Evolera100WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-10-0-with-active-players-server" />;
}
