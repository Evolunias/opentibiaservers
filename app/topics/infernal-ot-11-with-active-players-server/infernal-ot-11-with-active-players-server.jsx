import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-11-with-active-players-server');
}

export default function InfernalOt11WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-11-with-active-players-server" />;
}
