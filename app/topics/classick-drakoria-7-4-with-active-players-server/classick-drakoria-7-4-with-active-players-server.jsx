import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-7-4-with-active-players-server');
}

export default function ClassickDrakoria74WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-7-4-with-active-players-server" />;
}
