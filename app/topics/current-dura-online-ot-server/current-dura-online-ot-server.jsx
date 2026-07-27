import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-dura-online-ot-server');
}

export default function CurrentDuraOnlineOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-dura-online-ot-server" />;
}
