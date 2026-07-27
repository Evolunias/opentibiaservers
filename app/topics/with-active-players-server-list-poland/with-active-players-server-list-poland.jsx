import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-server-list-poland');
}

export default function WithActivePlayersServerListPolandKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-server-list-poland" />;
}
