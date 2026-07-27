import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-11-with-active-players-server');
}

export default function Classicus11WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-11-with-active-players-server" />;
}
