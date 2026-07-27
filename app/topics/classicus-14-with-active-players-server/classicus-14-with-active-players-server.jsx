import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-14-with-active-players-server');
}

export default function Classicus14WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-14-with-active-players-server" />;
}
