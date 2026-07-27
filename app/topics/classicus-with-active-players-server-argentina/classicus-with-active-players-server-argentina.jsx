import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-active-players-server-argentina');
}

export default function ClassicusWithActivePlayersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-active-players-server-argentina" />;
}
