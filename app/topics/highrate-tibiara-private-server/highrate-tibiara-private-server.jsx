import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiara-private-server');
}

export default function HighrateTibiaraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiara-private-server" />;
}
