import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-dura-online-ot-server');
}

export default function FreshStartDuraOnlineOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-dura-online-ot-server" />;
}
