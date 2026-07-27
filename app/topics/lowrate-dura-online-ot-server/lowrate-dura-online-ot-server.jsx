import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-dura-online-ot-server');
}

export default function LowrateDuraOnlineOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-dura-online-ot-server" />;
}
