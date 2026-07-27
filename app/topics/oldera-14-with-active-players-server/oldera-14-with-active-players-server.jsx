import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-14-with-active-players-server');
}

export default function Oldera14WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-14-with-active-players-server" />;
}
