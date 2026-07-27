import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-14-with-active-players-server');
}

export default function Evolera14WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-14-with-active-players-server" />;
}
