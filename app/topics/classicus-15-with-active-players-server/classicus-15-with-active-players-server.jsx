import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-15-with-active-players-server');
}

export default function Classicus15WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-15-with-active-players-server" />;
}
