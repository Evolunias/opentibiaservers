import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-6-with-active-players-server');
}

export default function ClassickDrakoria86WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-6-with-active-players-server" />;
}
