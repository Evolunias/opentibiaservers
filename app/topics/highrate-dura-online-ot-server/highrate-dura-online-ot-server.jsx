import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-dura-online-ot-server');
}

export default function HighrateDuraOnlineOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-dura-online-ot-server" />;
}
