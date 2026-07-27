import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-12-with-active-players-server');
}

export default function Classicus12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-12-with-active-players-server" />;
}
