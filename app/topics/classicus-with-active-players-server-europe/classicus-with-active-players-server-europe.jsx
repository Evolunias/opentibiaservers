import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-active-players-server-europe');
}

export default function ClassicusWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-active-players-server-europe" />;
}
