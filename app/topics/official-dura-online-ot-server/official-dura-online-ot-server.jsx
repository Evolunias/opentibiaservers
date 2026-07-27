import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-dura-online-ot-server');
}

export default function OfficialDuraOnlineOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-dura-online-ot-server" />;
}
