import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-10-0-with-active-players-server');
}

export default function ClassickDrakoria100WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-10-0-with-active-players-server" />;
}
