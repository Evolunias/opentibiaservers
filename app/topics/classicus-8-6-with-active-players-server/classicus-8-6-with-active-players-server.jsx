import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-6-with-active-players-server');
}

export default function Classicus86WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-6-with-active-players-server" />;
}
