import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-dura-online-private-server');
}

export default function LowrateDuraOnlinePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-dura-online-private-server" />;
}
