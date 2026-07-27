import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-11-with-active-players-server');
}

export default function Oldera11WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-11-with-active-players-server" />;
}
