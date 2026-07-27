import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-9-6-with-active-players-server');
}

export default function Classicus96WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-9-6-with-active-players-server" />;
}
