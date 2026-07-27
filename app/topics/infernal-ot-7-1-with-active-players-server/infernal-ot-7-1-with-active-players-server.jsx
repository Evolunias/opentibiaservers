import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-1-with-active-players-server');
}

export default function InfernalOt71WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-1-with-active-players-server" />;
}
