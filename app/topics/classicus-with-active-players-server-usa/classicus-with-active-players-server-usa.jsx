import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-active-players-server-usa');
}

export default function ClassicusWithActivePlayersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-active-players-server-usa" />;
}
