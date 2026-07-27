import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-15-with-active-players-server');
}

export default function ClassickDrakoria15WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-15-with-active-players-server" />;
}
