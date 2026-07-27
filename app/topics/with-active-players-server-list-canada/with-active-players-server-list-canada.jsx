import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-server-list-canada');
}

export default function WithActivePlayersServerListCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-server-list-canada" />;
}
