import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-active-players-server-poland');
}

export default function ClassicusWithActivePlayersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-active-players-server-poland" />;
}
