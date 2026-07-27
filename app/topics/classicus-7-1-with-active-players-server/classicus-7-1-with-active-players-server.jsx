import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-7-1-with-active-players-server');
}

export default function Classicus71WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-7-1-with-active-players-server" />;
}
