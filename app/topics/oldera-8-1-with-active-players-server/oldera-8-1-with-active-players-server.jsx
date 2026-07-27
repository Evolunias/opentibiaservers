import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-1-with-active-players-server');
}

export default function Oldera81WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-1-with-active-players-server" />;
}
