import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-13-with-active-players-server');
}

export default function InfernalOt13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-13-with-active-players-server" />;
}
