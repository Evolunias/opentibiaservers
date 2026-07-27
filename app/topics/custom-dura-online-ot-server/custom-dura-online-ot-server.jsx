import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dura-online-ot-server');
}

export default function CustomDuraOnlineOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-dura-online-ot-server" />;
}
