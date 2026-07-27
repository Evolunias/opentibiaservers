import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-7-4-with-active-players-server');
}

export default function Classicus74WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-7-4-with-active-players-server" />;
}
