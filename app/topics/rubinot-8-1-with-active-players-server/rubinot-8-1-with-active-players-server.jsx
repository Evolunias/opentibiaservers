import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-1-with-active-players-server');
}

export default function Rubinot81WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-1-with-active-players-server" />;
}
