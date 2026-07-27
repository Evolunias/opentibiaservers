import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-10-0-with-active-players-server');
}

export default function InfernalOt100WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-10-0-with-active-players-server" />;
}
