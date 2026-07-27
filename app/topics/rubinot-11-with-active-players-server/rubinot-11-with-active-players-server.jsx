import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-11-with-active-players-server');
}

export default function Rubinot11WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-11-with-active-players-server" />;
}
