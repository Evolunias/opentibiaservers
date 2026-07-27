import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiame-private-server');
}

export default function HighrateTibiamePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiame-private-server" />;
}
