import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-14-with-active-players-server');
}

export default function Rubinot14WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-14-with-active-players-server" />;
}
