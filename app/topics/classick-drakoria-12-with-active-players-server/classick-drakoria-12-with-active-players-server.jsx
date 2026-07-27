import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-12-with-active-players-server');
}

export default function ClassickDrakoria12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-12-with-active-players-server" />;
}
