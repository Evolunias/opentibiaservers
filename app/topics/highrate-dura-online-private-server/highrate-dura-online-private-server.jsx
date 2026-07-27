import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-dura-online-private-server');
}

export default function HighrateDuraOnlinePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-dura-online-private-server" />;
}
