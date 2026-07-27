import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-7-1-with-active-players-server');
}

export default function ClassickDrakoria71WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-7-1-with-active-players-server" />;
}
