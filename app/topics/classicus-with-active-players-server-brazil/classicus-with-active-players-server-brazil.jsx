import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-active-players-server-brazil');
}

export default function ClassicusWithActivePlayersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-active-players-server-brazil" />;
}
