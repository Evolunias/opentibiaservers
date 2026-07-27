import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-dura-online-ots');
}

export default function TopDuraOnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="top-dura-online-ots" />;
}
