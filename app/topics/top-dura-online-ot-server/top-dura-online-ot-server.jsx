import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-dura-online-ot-server');
}

export default function TopDuraOnlineOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-dura-online-ot-server" />;
}
