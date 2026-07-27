import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-server-list-north-america');
}

export default function WithActivePlayersServerListNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-server-list-north-america" />;
}
