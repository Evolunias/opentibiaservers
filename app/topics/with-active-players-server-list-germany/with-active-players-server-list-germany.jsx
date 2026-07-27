import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-server-list-germany');
}

export default function WithActivePlayersServerListGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-server-list-germany" />;
}
