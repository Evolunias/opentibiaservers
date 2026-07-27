import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-14-with-active-players-server');
}

export default function ClassickDrakoria14WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-14-with-active-players-server" />;
}
