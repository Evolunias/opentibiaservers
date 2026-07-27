import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-active-players-server-france');
}

export default function ClassicusWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-active-players-server-france" />;
}
