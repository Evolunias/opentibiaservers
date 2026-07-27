import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-13-with-active-players-server');
}

export default function Oldera13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-13-with-active-players-server" />;
}
