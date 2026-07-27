import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-10-0-with-active-players-server');
}

export default function Classicus100WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-10-0-with-active-players-server" />;
}
