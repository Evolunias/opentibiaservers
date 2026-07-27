import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-13-with-active-players-server');
}

export default function Classicus13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-13-with-active-players-server" />;
}
