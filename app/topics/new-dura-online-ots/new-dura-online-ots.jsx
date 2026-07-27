import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-dura-online-ots');
}

export default function NewDuraOnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="new-dura-online-ots" />;
}
