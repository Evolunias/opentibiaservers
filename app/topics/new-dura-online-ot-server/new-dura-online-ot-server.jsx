import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-dura-online-ot-server');
}

export default function NewDuraOnlineOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-dura-online-ot-server" />;
}
