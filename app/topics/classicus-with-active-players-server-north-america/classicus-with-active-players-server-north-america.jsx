import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-active-players-server-north-america');
}

export default function ClassicusWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-active-players-server-north-america" />;
}
