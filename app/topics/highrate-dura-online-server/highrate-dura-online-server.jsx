import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-dura-online-server');
}

export default function HighrateDuraOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-dura-online-server" />;
}
