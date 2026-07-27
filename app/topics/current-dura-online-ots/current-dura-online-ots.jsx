import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-dura-online-ots');
}

export default function CurrentDuraOnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="current-dura-online-ots" />;
}
