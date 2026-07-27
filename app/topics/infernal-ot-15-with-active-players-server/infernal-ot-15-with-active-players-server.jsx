import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-15-with-active-players-server');
}

export default function InfernalOt15WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-15-with-active-players-server" />;
}
