import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-zezenia-online-ot-server');
}

export default function OfficialZezeniaOnlineOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-zezenia-online-ot-server" />;
}
