import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-12-with-active-players-server');
}

export default function InfernalOt12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-12-with-active-players-server" />;
}
