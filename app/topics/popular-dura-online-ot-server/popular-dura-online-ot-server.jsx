import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-dura-online-ot-server');
}

export default function PopularDuraOnlineOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-dura-online-ot-server" />;
}
