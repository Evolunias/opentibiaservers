import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-14-with-active-players-server');
}

export default function InfernalOt14WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-14-with-active-players-server" />;
}
