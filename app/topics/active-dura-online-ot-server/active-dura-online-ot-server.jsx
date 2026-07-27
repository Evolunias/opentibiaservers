import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dura-online-ot-server');
}

export default function ActiveDuraOnlineOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-dura-online-ot-server" />;
}
