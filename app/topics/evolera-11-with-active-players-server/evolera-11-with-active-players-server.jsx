import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-11-with-active-players-server');
}

export default function Evolera11WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-11-with-active-players-server" />;
}
