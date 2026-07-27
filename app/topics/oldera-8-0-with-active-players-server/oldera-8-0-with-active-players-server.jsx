import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-0-with-active-players-server');
}

export default function Oldera80WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-0-with-active-players-server" />;
}
