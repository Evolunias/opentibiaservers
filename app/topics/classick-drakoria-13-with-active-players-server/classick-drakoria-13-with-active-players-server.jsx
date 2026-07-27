import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-13-with-active-players-server');
}

export default function ClassickDrakoria13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-13-with-active-players-server" />;
}
